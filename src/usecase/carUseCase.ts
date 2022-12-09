class CarUseCase {
    carRepo: any
    mediaRepo: any
    constructor(carRepo: any, mediaRepo: any) {
        this.carRepo = carRepo;
        this.mediaRepo = mediaRepo;
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

        const photo: any = await this.mediaRepo.getMediaById(car.photoId)
        const carValues: any = {
            id: car.id,
            title: car.title,
            type: car.type,
            cost: car.cost,
            isAvailable: car.isAvailable,
            stock: car.stock,
            photoId: car.photoId,
            updatedAt: car.updatedAt,
            createdAt: car.createdAt,
            photo,
        }

        result.isSuccess = true;
        result.statusCode = 200;
        result.data = carValues;
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