import { Request, Response, NextFunction } from "express";
import resData from '../helper/response'

class mediaController {
    upload = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await req.mediaUC.upload(req.file);
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

export default new mediaController();