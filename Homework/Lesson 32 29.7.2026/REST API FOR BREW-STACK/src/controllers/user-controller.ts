import { Router } from "express";
import express, { Request, Response } from "express";
import { productService } from "../services/product-service";
import { ProductModel } from "../models/product-model";
import { StatusCode } from "../models/enum";
import { UserModel } from "../models/user-model";
import { userService } from "../services/user-service";
import { CredentialsModel } from "../models/credentials-model";


class UserController {

    // Creates a router object that listen's too Routes, That funnel into this controller.
    public router: Router = express.Router();

    //Constructor, here we create the routes, that this specific controller listen's too.
    public constructor() {
        this.router.post("/api/register", this.register);
        this.router.post("/api/login", this.login);

    }
    // NO need for status code 200 since its the defult for both this functions.



    private async register(request: Request, response: Response): Promise<void> {

        const user = new UserModel(request.body);
        const token = await userService.register(user);
        response.status(StatusCode.Created).json(token);

    }

    public async login(request: Request, response: Response): Promise<void>{

        const userCredential = request.body;

        const credentials = new CredentialsModel(userCredential);
        const token = await userService.login(credentials);
        


    }









}

export const userController = new UserController();