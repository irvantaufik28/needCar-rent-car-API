const { Rent } = require('../models')

class RentRepo {
    private rent = Rent
    constructor() {
        this.rent
    }

    async getRentPendingByUserId(userId: number) {
        const rent = await this.rent.findOne({
            where: {
                userId,
                status: "PENDING"
            }
        })
        return rent;
    }

    async getRentByUserId(userId: number) {
        const rent = await this.rent.findOne({
            where: {
                userId
            }
        })
        return rent;
    }


    async getAllRent() {
        const rent = await this.rent.findAll()
        return rent;
    }

    async createRent(data: any) {
        const rent = await this.rent.create(data)
        return rent;
    }
}

export default RentRepo;