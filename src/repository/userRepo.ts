const { User } = require('../models')

class UserRepo {
    private user = User;
    constructor() {
        this.user
    }

    async getUserById(id: number) {
        const user: any = await this.user.findOne({
            where: {
                id:id
            }
        })
        return user;
    }

    async getAllUsers() {
    return await this.user.findAll()
       
    }
}

export default UserRepo;