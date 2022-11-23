import { Request, Response } from 'express'


class AuthControllers  {
   
    login(req: Request, res: Response):Response {
        return res.send()
    }
    register(req: Request, res: Response):Response {
       return res.send("create succses")
    }

}

export default new AuthControllers();