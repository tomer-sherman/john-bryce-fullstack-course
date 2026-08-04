import express, { Request, Response, Router } from "express";

import { productService } from "../services/product-service";
import { UserModel } from "../models/user-model";
import { userService } from "../services/user-service";
import { StatusCode } from "../models/enum";
import { Credentials } from "../models/credantials";
import { cyber } from "../util/cyber";


// A LISTENER 
class UserController {

    // Create a router object which can listen on routes:
    public router: Router = express.Router();

    // Constructor:
    public constructor() {
        this.router.post("/api/register", this.addUser);
        this.router.post("/api/login", this.login);


    }

    // Get all products:
    private async addUser(request: Request, response: Response): Promise<void> {

        const user = new UserModel(request.body);
        const token = await userService.addUser(user);
        response.status(StatusCode.Created).json(token);

    }

    private async login(request: Request, response: Response): Promise<void> {

        const email = request.body.email;
        const password = request.body.password;
        

        const credentials = new Credentials(email, password);
        const token = await userService.login(credentials);
        response.json(token);

    }

}

export const userController = new UserController();
