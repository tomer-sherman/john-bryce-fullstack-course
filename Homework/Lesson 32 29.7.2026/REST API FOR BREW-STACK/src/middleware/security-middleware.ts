
import { NextFunction, Request, Response } from "express"
import { StatusCode } from "../models/enum";
import { cyber } from "../util/cyber";
import { ClientError } from "../models/client-error";

class SecurityMiddleware {


 


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

    public verifyAdmin(request: Request, response: Response, next: NextFunction): void {

        const auth = request.headers.authorization;
        const token = auth?.substring(7);

        if (cyber.verifyAdmin(token!)) {
            next();
        }
        else {
            const err = new ClientError(StatusCode.Forbidden, "You are not authorized");
            next(err);
        }

    }
 
}

export const securityMiddleware = new SecurityMiddleware();