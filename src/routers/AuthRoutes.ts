import { Router, Request, Response } from 'express'
import IRouter from './routerInterface'

// Controllers
import AuthController from '../controllers/AuthController';

class AuthRoutes implements IRouter {
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {
        this.router.post('/login')
        this.router.post('/register')
        
    }
}
export default new AuthRoutes().router;