import {Request , Response, NextFunction} from "express";
import resData from '../helper/response'

class userController {
    getUserById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params
            const result = await req.userUC.getUserById(id);
            if (!result.isSuccess) {
                return res
                .status(result.statusCode)
                .json(resData.failed(result.reason, result))
            }
            return res
            .status(result.statusCode)
            .json(resData.success(result.data))
            
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
                .json(resData.failed(result.reason, result))
            }
            return res
            .status(result.statusCode)
            .json(resData.success(result.data))
            
        } catch (e) {
            next(e)
        }
    }
}

export default new userController();