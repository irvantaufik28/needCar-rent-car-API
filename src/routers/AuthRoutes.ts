import BaseRoutes from './BaseRouter';
import { auth } from '../middlewares/AuthMiddleware';

// Controllers
import AuthController from '../controllers/AuthController';

class AuthRoutes extends BaseRoutes {
    

    public routes(): void {
        this.router.post('/login', auth, AuthController.login)
        this.router.post('/register', AuthController.register)
        
    }
}

export default new AuthRoutes().router;