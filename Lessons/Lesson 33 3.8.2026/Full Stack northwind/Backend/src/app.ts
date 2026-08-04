import express, { NextFunction, Request, Response } from "express";
import { productController } from "./controllers/product-controller";

import { loggerMiddleware } from "./middleware/logger-middleware";
import { securityMiddleware } from "./middleware/security-middleware";
import { errorMiddleware } from "./middleware/error-middleware";
import { userController } from "./controllers/user-controller";
import expressFileUpload from "express-fileupload";
import { saver } from "smart-saver";
import path from "node:path";
import cors from "cors"
import expressRateLimit from "express-rate-limit";



class App {
    public start(): void {

        //Configure smart saver
        saver.config(path.join(__dirname, "assets", "images"));



        // Create our server object
        const server = express();



        //Dos attack prevent:
        securityMiddleware.registerRateLimit(server);
        //Configure express to create response.body from a give JSON:
        server.use(cors()); // Enable Cors.
        server.use(express.json());
        server.use(expressFileUpload())

        //Register middleware:
        server.use(loggerMiddleware.logToConsole);
        // You put this after the log too see if anyone tried too doo something.
        server.use(securityMiddleware.preventXss);
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