import {Request , Response, NextFunction} from "express";
import resData from '../helper/response'

class userController {
    getRentByUserId = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params
            const result = await req.rentUC.getRentByUserId(id);
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
    
    createRent = async (req: Request, res: Response, next: NextFunction) => {
        try {

            const rent: any = {
                userId:req.body.userId,
                carId: req.body.carId,
                isWithDriver:req.body.isWithDriver,
                dayOut: new Date(req.body.dayOut),
                dayIn: new Date(req.body.dayIn)
            }
          
            const result = await req.rentUC.createRent(rent);
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