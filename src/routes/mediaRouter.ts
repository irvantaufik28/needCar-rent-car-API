import BaseRoutes from "./BaseRouter";

// controller
import mediaController from "../controllers/mediaController";
import upload from "../libs/meidaHandler";

class MediaRouter extends BaseRoutes {
   public routes(): void {
    this.router.post('/',upload.single("image"), mediaController.upload)
   }
}

export default new MediaRouter().router;