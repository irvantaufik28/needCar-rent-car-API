import { Request, Response, NextFunction } from "express";
import resData from '../helper/response'

class carController {
    getCarById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params
            const result = await req.carUC.getCarById(id);
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

    getAllCar = async (req: Request, res: Response, next: NextFunction) => {
        try {

            const result = await req.carUC.getAllCar();
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

    createCar = async (req: Request, res: Response, next: NextFunction) => {

        try {
            const carData: any = {
                title: req.body.title,
                type: req.body.type,
                cost: req.body.cost,
                isAvailable: true,
                licensePlate: req.body.licensePlate,
                photoId: req.body.photoId
            }
            const result = await req.carUC.createCar(carData);
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

export default new carController();