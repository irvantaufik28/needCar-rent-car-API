import { Router, Request, Response } from 'express'
import IRouter from './routerInterface'

// Controllers
import UserControllers from '../controllers/UserControllers';

class UserRoutes implements IRouter {
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {
        this.router.get('/', UserControllers.index)
        this.router.post('/', UserControllers.create)
        this.router.get('/:id', UserControllers.show)
        this.router.put('/update/:id', UserControllers.update)
        this.router.delete('/delete/:id', UserControllers.delete)
    }
}
export default new UserRoutes().router;