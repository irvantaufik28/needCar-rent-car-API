import { Request } from "express";
import multer from "multer";

import path from "path";

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

const storage = multer.diskStorage({
    destination: (
        req: Request,
        file: Express.Multer.File,
        callback: DestinationCallback
    ): void => {
        callback(null, path.join(__dirname, '../public/uploads'))
    },

    filename: (
        req: Request, 
        file: Express.Multer.File, 
        callback: FileNameCallback
    ): void => {
        callback(null, Date.now()+ '_' + file.originalname)
    }
})

const upload = multer ({
    storage:storage
})

export default upload;