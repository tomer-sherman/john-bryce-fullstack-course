import { NextFunction, Request, Response } from "express"

class LoggerMiddleware {

    // Pass-Through Middleware:
    public logToConsole(request: Request, response: Response, next: NextFunction): void {

        const method = request.method;
        const route = request.originalUrl;
        const body = request.body ? JSON.stringify(request.body) : null;
        console.log(`${method}, ${route}| body: ${body}`);
        next(); // Continue to next middleware /route.
        
    }

}

export const loggerMiddleware = new LoggerMiddleware();