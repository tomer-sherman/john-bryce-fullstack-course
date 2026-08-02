import express from "express";
import { productController } from "./controllers/product-controller";

import { loggerMiddleware } from "./middleware/logger-middleware";
import { securityMiddleware } from "./middleware/security-middleware";
import { errorMiddleware } from "./middleware/error-middleware";
import { userController } from "./controllers/user-controller";

class App {
    public start(): void {

        // Create our server object
        const server = express();

        //Configure express to create response.body from a give JSON:
        server.use(express.json());

        //Register middleware:
        server.use(loggerMiddleware.logToConsole);
        server.use(securityMiddleware.blackList);
        
        // Register controllers:
        server.use(userController.router);
        server.use(productController.router);


        // Middle were after:
        server.use(errorMiddleware.routeNotFound);
        server.use(errorMiddleware.catchAll);

        // Run the server:
        server.listen(4000, () => { console.log("Listening....") });
    }
}

const app = new App();
app.start();