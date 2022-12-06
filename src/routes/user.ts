import BaseRoutes from "./BaseRouter";

// controller
import userController from "../controllers/user";

class UserRoutes extends BaseRoutes {
   public routes(): void {
    this.router.get('/:id', userController.getUserById)
    this.router.get('/', userController.getAllUsers)
   }
}

export default new UserRoutes().router;