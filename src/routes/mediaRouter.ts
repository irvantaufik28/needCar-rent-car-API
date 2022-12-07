import BaseRoutes from "./BaseRouter";

// controller
import carController from "../controllers/mediaController";

class MediaRouter extends BaseRoutes {
   public routes(): void {
    this.router.post('/', carController.upload)
   }
}

export default new MediaRouter().router;