const { user : User } = require('../models')

class UserRepository {
    private user = User;

    async getUserById (id: number) {
        const result = await this.user.findOne({
            where : { id },
        })
        return result
    }
    
    async getAllUser (){
        const result = await this.user.findAll()
        return result
    }

    async createUser (user: object) {
        const result = await this.user.create(user)
        return result 
    }
}

export default UserRepository