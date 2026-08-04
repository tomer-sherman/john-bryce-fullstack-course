import { NextFunction, Request, Response, Express } from "express"
import { StatusCode } from "../models/enum";
import { cyber } from "../util/cyber";
import { ClientError } from "../models/client-error";
import striptags from "striptags";
import expressRateLimit from "express-rate-limit";



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


    // Prevent XSS attack:
    public preventXss(request: Request, response: Response, next: NextFunction): void {

        // Run on body object:
        for (const prop in request.body) {
            // take prop value
            const value = request.body[prop];
            // If prop is a string then it removes tags, from the string
            if (typeof value === "string") {
                request.body[prop] = striptags(value);
            }
        }

        // continue:
        next();
    }

    public registerRateLimit(server: Express): void {

        // General rate - limit:
        server.use(expressRateLimit({
            windowMs: 1000, // Time window in milliseconds.
            limit: 5, // How many request allowed in that window.
            skip: (request: Request) => request.path.startsWith("/api/products/images") // Skips this specific route
        }));

        // Images rate - limit:
        server.use("/api/products/images/", expressRateLimit({
            windowMs: 1000,
            limit: 200
        }));


    }


}

export const securityMiddleware = new SecurityMiddleware();