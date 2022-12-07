class CarUseCase {
    carRepo: any
    constructor(carRepo: any) {
        this.carRepo = carRepo;
    }

    async createCar(carData: any) {
        let result = {
            isSuccess: true,
            statusCode: 200,
            reason: '',
            data: null
        }

        const car = await this.carRepo.createCar(carData)
        result.data = car
        return result;
    }

    async getCarById(id: number) {
        let result = {
            isSuccess: false,
            statusCode: 404,
            reason: '',
            data: null
        }

        const car: any = await this.carRepo.getCarById(id)
        if (car === null) {
            result.reason = 'Car not found!';
            return result;
        }
        result.isSuccess = true;
        result.statusCode = 200;
        result.data = car;
        return result;
    }

    async getAllCar() {
        let result = {
            isSuccess: true,
            statusCode: 200,
            reason: '',
            data: null
        }

        const car: any = await this.carRepo.getAllCar()

        result.data = car;
        return result;
    }
}

export default CarUseCase;