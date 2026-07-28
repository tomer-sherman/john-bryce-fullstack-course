import { NextFunction, Request, Response } from "express";
import "colors";


type ColorName = "green" | "yellow" | "blue" | "magenta" | "red" | "white";

const methodColors: Record<string, ColorName> = {
    GET: "green",
    POST: "yellow",
    PUT: "blue",
    PATCH: "magenta",
    DELETE: "red",
};


class LoggerMiddleware {

    public logToConsole(request: Request, response: Response, next: NextFunction): void {

        const method = request.method;
        const route = request.originalUrl;
        const message = request.body ? JSON.stringify(request.body): "Body does not exist";

        const color = methodColors[method] ?? "white";

        console.log(`${method[color]} | ${route.cyan} | ${message?.gray} `)

        next();
    }


}

export const loggerMiddleware = new LoggerMiddleware();