import BaseRoutes from "./BaseRouter";

// controller
import rentController from "../controllers/rentController";

class rentRoutes extends BaseRoutes {
   public routes(): void {
    this.router.post('/', rentController.createRent)
    this.router.get('/:id', rentController.getRentByUserId)
   }
}

export default new rentRoutes().router;