import { NextFunction, Request, Response } from "express";
import { StatusCode } from "../models/enum";


class ShabatMiddleware {

    public shabatHayom(request: Request, response: Response, next: NextFunction): void {

        const day = new Date().getDay()
        const message = "Shabat hayoom hii tfoo fuck of!! you goy!!";
        day === 6 ? response.status(StatusCode.Forbidden).json({ message }) : next();

    }


}

export const shabatMiddleware = new ShabatMiddleware();