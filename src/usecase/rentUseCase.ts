class RentUseCase {
  rentRepo: any;
  carRepo: any;
  rentStatus: any;
  constructor(rentRepo: any, carRepo: any, rentStatus: any) {
    this.rentRepo = rentRepo;
    this.carRepo = carRepo;
    this.rentStatus = rentStatus;
  }

  async getRentByUserId(userId: number) {
    let result: any = {
      isSuccess: false,
      statusCode: 404,
      reason: "",
      data: null,
    };

    const rent = await this.rentRepo.getRentByUserId(userId);
    if (rent === null) {
      result.reason = "rent not found";
      return result;
    }
    result.isSuccess = true;
    result.statusCode = 200;
    result.data = rent;
    return result;
  }

  async createRent(rentData: any) {
    let result: any = {
      isSuccess: false,
      statusCode: 404,
      reason: "",
      data: null,
    };

    const verfyCar = await this.carRepo.getCarById(rentData.carId);
    if (verfyCar === null) {
      result.reason = "car not found";
      return result;
    }

    if (verfyCar.isAvailable === false) {
      result.reason = "car is not available";
      return result;
    }

    const verifyRent: any = await this.rentRepo.getRentPendingByUserId(
        rentData.userId
      );
      if (verifyRent !== null) {
        result.reason = "cannot rent more 1 car";
        result.statusCode = 400;
        return result;
      }

    rentData.status = this.rentStatus.PENDING;
    await this.rentRepo.createRent(rentData);

    const rentByUserID: any = await this.rentRepo.getRentByUserId(
      rentData.userId
    );
    
    const getCarById: any = await this.carRepo.getCarById(rentData.carId);
    const verfyDriver: any = rentByUserID.isWithDriver;
    const dayOut = Date.parse(rentData.dayOut);
    const dayIn = Date.parse(rentData.dayIn);
    const rentDay: number = (dayIn - dayOut) / 86400000;

    let driverCost: number = 0;
    if (verfyDriver === true) {
      driverCost = 300000 * rentDay;
    }
    const rentCost: number = getCarById.cost * rentDay;
    const totalCost = rentCost + driverCost;

    let rentValue: any = {
      id: rentByUserID.id,
      userId: rentByUserID.userId,
      status: rentByUserID.status,
      carId: rentByUserID.carId,
      isWithDriver: rentByUserID.isWithDriver,
      dayOut: rentByUserID.dayOut,
      dayIn: rentByUserID.dayIn,
      dayReturned: rentByUserID.dayReturned,
      rentDay,
      rentCost,
      driverCost,
      totalCost,
      car: getCarById,
    };

    result.isSuccess = true;
    result.statusCode = 200;
    result.data = rentValue;
    return result;
  }
}

export default RentUseCase;
