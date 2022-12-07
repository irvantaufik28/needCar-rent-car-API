const { Car } = require('../models')

class CarRepo {
    private car = Car;
    constructor() {
        this.car
    }

    async createCar(data: any) {
        const car: any = await this.car.create(data)
        return car
    }

    async getAllCar() {
        const car: any = await this.car.findAll()
        return car
    }

    async getCarById(id: number) {
        const car: any = await this.car.findOne({
            where: {
                id
            }
        })
        return car;
    }

    async updateCar(data: any, id: number) {
        const car: any = await this.car.update(data, {
            where : { id }
        })
        return car;
    }

    async deleteCar(id: number) {
        const car: any = await this.car.destroy({
            where: {
                id
            }
        })
        return car;
    }
}

export default CarRepo;