import {Request , Response, NextFunction} from "express";

class userController {
    getUserById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params
            const result = await req.userUC.getUserById(id);
            if (!result.isSuccess) {
                return res
                .status(result.statusCode)
                .json(result.reason)
            }
            return res
            .status(result.statusCode)
            .json(result.data)
            
        } catch (e) {
            next(e)
        }
    }
    getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
        try {
          
            const result = await req.userUC.getAllUsers();
            if (!result.isSuccess) {
                return res
                .status(result.statusCode)
                .json(result.reason)
            }
            return res
            .status(result.statusCode)
            .json(result.data)
            
        } catch (e) {
            next(e)
        }
    }
}

export default new userController();