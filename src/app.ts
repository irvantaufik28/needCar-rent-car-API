import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors"
import helmet from "helmet";
import compression from "compression";
import serverError from "./middleware/serverError";
import sharp from "sharp";
import path from "path";
import fs from "fs";

// Repository
import UserRepo from "./repository/userRepo";
import CarRepo from "./repository/carRepo";
import MediaRepo from "./repository/mediaRepo";

// UseCase
import UserUseCase from "./usecase/userUseCase";
import CarUseCase from "./usecase/carUseCase";
import MediaUseCase from "./usecase/mediaUseCase";

const userUC = new UserUseCase(new UserRepo())
const carUC = new CarUseCase(new CarRepo())
const mediaUC = new MediaUseCase(new MediaRepo(), sharp, path)

declare global {
  namespace Express {
    export interface Request {
      userUC: any;
      carUC: any;
      mediaUC: any;
    }
  }
}

// Routes
import UserRoutes from './routes/userRouter'
import CarRoutes from './routes/carRouter'
import MediaRoutes from './routes/mediaRouter'


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
      this.app.use(express.urlencoded({extended: true}))
      this.app.use("/uploads", express.static("../uploads"))
      this.app.use(morgan('dev'))
      this.app.use(cors())
      this.app.use(helmet())
      this.app.use(compression())

      this.app.use((req, res, next) => {
        req.userUC = userUC;
        req.carUC = carUC;
        req.mediaUC = mediaUC;
        next();
      });

    }

    protected routes(): void {
      this.app.use('/api/v1/user', UserRoutes)
      this.app.use('/api/v1/car', CarRoutes)
      this.app.use('/api/v1/upload', MediaRoutes)
    }
    protected serverError() {
      this.app.use(serverError)
    }
  }
  
  export default App;