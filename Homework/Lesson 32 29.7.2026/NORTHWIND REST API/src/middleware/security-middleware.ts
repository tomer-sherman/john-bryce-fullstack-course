import { NextFunction, Request, Response } from "express"
import { StatusCode } from "../models/enum";

class SecurityMiddleware {


    // Black list check a ShortCircut middleware

    public blackList(request: Request, response: Response, next: NextFunction): void {
        // Demo blacklist
        const ipAddresses = ["11.22.33.44", "100.200.3.5"];


        const userIp = request.ip?.toString()!;
        console.log(userIp);
        if (ipAddresses.includes(userIp)) {
            const message = "GET OUT OF MY ROOM I AM PLAYING MINECRAFT!!!"
            response.status(StatusCode.Forbidden).json({ message })
        }
        else {
            next();
        }

    }

}

export const securityMiddleware = new SecurityMiddleware();