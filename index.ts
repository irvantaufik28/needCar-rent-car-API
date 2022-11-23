import  express, { Application, Request, Response } from "express";
import bodyParser from "body-parser"
import morgan from "morgan"
import compression from "compression"
import helmet from "helmet"
import cors from "cors"
import { config as dotenv } from 'dotenv'


// Roters
import UserRoutes from "./src/routers/UserRoutes";

class App {
  public app : Application;
  constructor() {
    this.app = express()
    this.plugins();   
    this.routes();
    dotenv(); 
  }

  protected plugins(): void {
    this.app.use(bodyParser.json())
    this.app.use(morgan("dev"))
    this.app.use(compression())
    this.app.use(helmet())
    this.app.use(cors())
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("Hello type scripts")
    })

    this.app.use('/api/v1/users', UserRoutes)

  }
}

const port: number = 3000;
const app = new App().app;

app.listen(port, () => {
  console.log(`server running at port ${port}`)
  console.log(process.env.DB_HOST)
})
