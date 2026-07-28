import { NextFunction, Request, Response } from "express";
import { StatusCode } from "../models/enum";
import { ClientError } from "../models/client-error";


class ErrorCatcherMiddleware {

    public routeNotFound(request: Request, response: Response, next: NextFunction): void {
        const err = new ClientError(StatusCode.NotFound, `Route ${request.originalUrl} on method ${request.method} not found.`);
        next(err);
    }

    public catchAll(err: any, request: Request, response: Response, next: NextFunction): void {
        console.log(err);
        const status = err.message | StatusCode.InternalServerError;
        const message = err.message;
        response.status(status).json({ message });
    }


}

export const errorCatcherMiddleware = new ErrorCatcherMiddleware();