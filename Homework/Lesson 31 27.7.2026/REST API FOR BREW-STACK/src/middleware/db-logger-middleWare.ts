import { NextFunction, Request, Response } from "express";
import { DbLoggerModel } from "../models/dbLogger-mode";
import { StatusCode } from "../models/enum";
import { loggerService } from "../services/logger-service";


class DbLoggerMiddleware {

    public addLog(request: Request, response: Response, next: NextFunction): void {

        const method = request.method;
        const route = request.originalUrl;
        const body = request.body ? JSON.stringify(request.body) : "Body does not exist";

        const newDbLog = new DbLoggerModel(method, route, body);


        loggerService.addLog(newDbLog);
        //response.status(StatusCode.Created).json(dbLog); no reason for response, Since we are not sending any response back
        // The point is too simply get a request, and store it in the DB in a log table. or https request's table.
        // No await - the insert fires and lives its own life, the request moves on without waiting for the DB.

        next();
    }


}

export const dbLoggerMiddleware = new DbLoggerMiddleware();