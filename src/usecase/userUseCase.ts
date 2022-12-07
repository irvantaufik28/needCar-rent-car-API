class UserUseCase {
    userRepo: any
    constructor(userRepo: any) {
        this.userRepo = userRepo;
    }

    async getUserById(id: number) {
        let result: any = {
            isSuccess: false,
            statusCode: 404,
            reason: '',
            data: null
        }
        const user: any = await this.userRepo.getUserById(id);
        if (user === null) {
            result.reason = "user not found!"
            return result;
        }
        result.isSuccess = true;
        result.statusCode = 200;
        result.data = user;
        return result;
    }

    async getAllUsers() {
        let result: any = {
            isSuccess: false,
            statusCode: 404,
            reason: '',
            data: null
        }
        const user = await this.userRepo.getAllUsers();
        if (user === null) {
            result.reason = "user not found!"
            return result;
        }
        result.isSuccess = true;
        result.statusCode = 200;
        result.data = user;
        return result;
    }
}

export default UserUseCase;