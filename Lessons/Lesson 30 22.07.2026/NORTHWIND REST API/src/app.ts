import express from "express";
import { productController } from "./controllers/product-controller";

class App {
    public start(): void {

        // Create our server object
        const server = express();

        //Configure express to create response.body from a give JSON:
        server.use(express.json());

        // Connect routes:
        server.use(productController.router);

        // Run the server:
        server.listen(4000, () => { console.log("Listening....") });
    }
}

const app = new App();
app.start();