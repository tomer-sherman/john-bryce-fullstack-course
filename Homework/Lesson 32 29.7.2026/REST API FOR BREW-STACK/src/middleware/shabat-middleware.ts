import { NextFunction, Request, Response } from "express";
import { StatusCode } from "../models/enum";
import { ClientError } from "../models/client-error";


class ShabatMiddleware {

    public shabatHayom(request: Request, response: Response, next: NextFunction): void {

        const day = new Date().getDay()
        const message = "Shabat hayoom hii tfoo fuck of!! you goy!!";
        day === 6 ? next(new ClientError(StatusCode.Unauthorized, "Shabat hayum!!! ya sharmut!!")) : next();

    }


}

export const shabatMiddleware = new ShabatMiddleware();