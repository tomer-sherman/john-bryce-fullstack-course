import { NextFunction, Request, Response } from "express"
import { StatusCode } from "../models/enum";
import { request } from "node:http";
import { cyan } from "colors/safe";
import { cyber } from "../util/cyber";
import { ClientError } from "../models/client-error";

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

    public verifyLoggedIn(request: Request, response: Response, next: NextFunction): void {

        const auth = request.headers.authorization; // "Bearer the-token..."
        const token = auth?.substring(7);

        //If token is legal:

        if (cyber.verifyToken(token!)) {
            next();
        }
        else {

            // SO KEEP IN MIND, THE CATCH ALL JOB IS THE THROW PEOPLE OUT, NOT THIS SPECIFIC MIDDLEWARE.
            const err = new ClientError(StatusCode.Unauthorized, "You are not logged in.");
            next(err);
        }


    }

    public verifyAdmin(request: Request, response: Response, next: NextFunction): void{

        const auth = request.headers.authorization;
        const token = auth?.substring(7);

        if(cyber.verifyAdmin(token!)){
            next();
        }
        else{
            const err = new ClientError(StatusCode.Forbidden, "You are not authorized");
            next(err);
        }
        
    }

}

export const securityMiddleware = new SecurityMiddleware();