import express, {Application , Request, Response} from "express";
import morgan from "morgan";
import cors from "cors"
import helmet from "helmet";
import compression from "compression";

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


class App {
    public app: Application
    constructor() {
      this.app = express()
      this.plugins()
      this.routes()
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
      this.app.route('/').get((req: Request, res: Response) =>{
        res.json('hello')
      })

      this.app.use('/api/v1/users', UserRoutes)
     
    }
  }
  
  export default App