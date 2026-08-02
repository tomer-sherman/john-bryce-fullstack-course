import colors from "colors/safe";
import { NextFunction, Request, Response } from "express";

// Each HTTP method gets its own color:
const methodColors: Record<string, (text: string) => string> = {
    GET: colors.green,
    POST: colors.yellow,
    PUT: colors.blue,
    PATCH: colors.magenta,
    DELETE: colors.red
};

class LoggerMiddleware {

    // Pass-Through Middleware:
    public logToConsole(request: Request, response: Response, next: NextFunction): void {

        const method = request.method;
        const route = request.originalUrl;
        const hasBody = request.body && Object.keys(request.body).length > 0;

        const color = methodColors[method] || colors.white;
        const body = hasBody ? colors.cyan(JSON.stringify(request.body)) : colors.gray("Body doesn't exist");

        console.log(`${color(method)} | ${colors.white(route)} | ${body}`);

        next(); // Continue to next middleware / route.
    }

    
}

export const loggerMiddleware = new LoggerMiddleware();
