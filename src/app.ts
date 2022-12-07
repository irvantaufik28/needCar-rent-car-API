import express, {Application , Request, Response} from "express";
import morgan from "morgan";
import cors from "cors"
import helmet from "helmet";
import compression from "compression";
import serverError from "./middleware/serverError";

// Repository
import UserRepo from "./repository/userRepo";
import CarRepo from "./repository/carRepo";

// UseCase
import UserUseCase from "./usecase/userUseCase";
import CarUseCase from "./usecase/carUseCase";

const userUC = new UserUseCase(new UserRepo())
const carUC = new CarUseCase(new CarRepo())

declare global {
  namespace Express {
    export interface Request {
      userUC: any;
      carUC: any;
    }
  }
}


// Routes
import UserRoutes from './routes/userRouter'
import CarRoutes from './routes/carRouter'


class App {
    public app: Application
    constructor() {
      this.app = express()
      this.plugins()
      this.routes()
      this.serverError()
    }

    protected plugins():void {
      this.app.use(express.json())
      this.app.use(morgan('dev'))
      this.app.use(cors())
      this.app.use(helmet())
      this.app.use(compression())

      this.app.use((req, res, next) => {
        req.userUC = userUC;
        req.carUC = carUC;
        next();
      });

    }

    protected routes(): void {
      this.app.use('/api/v1/user', UserRoutes)
      this.app.use('/api/v1/car', CarRoutes)
    }
    protected serverError() {
      this.app.use(serverError)
    }
  }
  
  export default App