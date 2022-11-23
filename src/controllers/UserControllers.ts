import { Request, Response } from 'express'
import IController from './controllersInterface'

let data: any[] = [
    {id:1, name:'irvan'},
    {id:2, name:'cindy'},
    {id:3, name:'kian'},
    {id:4, name:'zamza'}
]
class UserController implements IController {
    index(req: Request, res: Response):Response {
        return res.send(data)
    }
    create(req: Request, res: Response):Response {
       const {id, name} = req.body;

       data.push({
        id: id,
        name: name
       })
       return res.send("create succses")
    }
    show(req: Request, res: Response):Response {
        const { id } = req.params;

        let person = data.find(item => item.id == id)
        console.log(person)
        return res.send(person)
    }
    update(req: Request, res: Response):Response {
        throw new Error('Method not implemented.')
    }
    delete(req: Request, res: Response):Response {
        throw new Error('Method not implemented.')
    }
   
}

export default new UserController();