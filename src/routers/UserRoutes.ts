import BaseRoutes from './BaseRouter';

// Controllers
import UserControllers from '../controllers/UserControllers';

class UserRoutes extends BaseRoutes {

    public routes(): void {
        this.router.get('/', UserControllers.index)
        this.router.post('/', UserControllers.create)
        this.router.get('/:id', UserControllers.show)
        this.router.put('/update/:id', UserControllers.update)
        this.router.delete('/delete/:id', UserControllers.delete)
    }
}
export default new UserRoutes().router;