import BaseRoutes from "./BaseRouter";

// controller
import carController from "../controllers/carController";

class CarRoutes extends BaseRoutes {
   public routes(): void {
    this.router.post('/', carController.createCar)
    this.router.get('/', carController.getAllCar)
    this.router.get('/:id', carController.getCarById)
   }
}

export default new CarRoutes().router;