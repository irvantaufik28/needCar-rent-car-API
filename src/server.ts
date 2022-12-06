import App from "./app";

require("dotenv").config();

class Server extends App {
  host: string = String(process.env.HOST);
  port: number = Number(process.env.PORT);

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is Running at ${this.host}:${this.port}`);
    });
  }
}

new Server().listen();