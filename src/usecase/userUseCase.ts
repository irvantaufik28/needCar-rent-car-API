class UserUseCase {
    user : UserRepository
    constructor(user: UserRepository) {
        this.user = user;
    }

    async getUserById (id: number) {
        let result: any = {
            isSucces: false,
            statusCode : 404,
            reason: null
        }
        let user: any= await this.user.getUserById(id)
        if (user === null) {
            result.reason = 'user not found'
            return result;
    }
}
}

export default UserUseCase