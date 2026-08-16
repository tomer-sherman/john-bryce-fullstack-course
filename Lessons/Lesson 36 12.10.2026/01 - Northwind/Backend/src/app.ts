import cors from "cors";
import express from "express";
import expressFileUpload from "express-fileupload";
import path from "path";
import { saver } from "smart-saver";
import { productController } from "./controllers/product-controller";
import { userController } from "./controllers/user-controller";
import { errorMiddleware } from "./middleware/error-middleware";
import { securityMiddleware } from "./middleware/security-middleware";
import { appConfig } from "./utils/app-config";
import mongoose from "mongoose";
import { supplierController } from "./controllers/supplier-controller";
import { SupplierModel } from "./models/supplier-model";
import { saleService } from "./services/sales-service";
import { salesController } from "./controllers/sales-controller";
import { socketService } from "./services/socket-service";
import { ragController } from "./controllers/rag-controller";

class App {

    public async start(): Promise<void> {

        // Connect to MongoDb:
        await mongoose.connect(appConfig.mongodbConnectionString);
        // await SupplierModel.syncIndexes(); // To syncronize indexes. 

        // Configure smart-saver - images path:
        saver.config(path.join(__dirname, "assets", "images"));

        // Create our server object:
        const server = express();

        // System middleware:
        securityMiddleware.registerRateLimit(server); // Prevent DoS attacks.
        securityMiddleware.headerProtection(server); // Prevent header attacks.
        server.use(cors()); // Enable CORS.
        server.use(express.json()); // Configure express to create request.body from a given JSON.
        server.use(expressFileUpload()); // Configure express to create request.files from the request.

        // Register "before" middleware: 
        // server.use(loggerMiddleware.logToConsole);
        server.use(securityMiddleware.preventXss);
        server.use(securityMiddleware.blackList);

        // Register controllers:
        server.use(userController.router);
        server.use(productController.router);
        server.use(supplierController.router);
        server.use(salesController.router);
        server.use(ragController.router);

        // Register "after" middleware:
        server.use(errorMiddleware.routeNotFound);
        server.use(errorMiddleware.catchAll);

        // Run server:
        const httpServer = server.listen(appConfig.port, () => console.log("Listening..."));
        socketService.start(httpServer);


    }

}

const app = new App();
app.start();

// taskkill /F /IM node.exe
