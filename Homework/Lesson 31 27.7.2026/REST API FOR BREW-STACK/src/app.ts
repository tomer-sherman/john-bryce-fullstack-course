import express from "express"
import { productController } from "./controllers/product-controller";
import { loggerMiddleware } from "./middleware/logger-middleware";
import { shabatMiddleware } from "./middleware/shabat-middleware";
import { errorCatcherMiddleware } from "./middleware/error-middleware";
import { dbLoggerMiddleware } from "./middleware/db-logger-middleWare";

class App {

    public start(): void {

        // Create out server object:
        const server = express();

        //Configure express to work with JSON:
        server.use(express.json());

        //register Middleware, i will add here late stuff.
        server.use(loggerMiddleware.logToConsole);
        server.use(dbLoggerMiddleware.addLog)
        server.use(shabatMiddleware.shabatHayom);

        //Register controllers, same.
        server.use(productController.router);

        //middle ware after CatchAllMiddleware and route,not found will be here
        server.use(errorCatcherMiddleware.routeNotFound);
        server.use(errorCatcherMiddleware.catchAll);



        //Run the server:

        server.listen(4001, () => { console.log("Listening...") })

    }

}

const app = new App();
app.start();