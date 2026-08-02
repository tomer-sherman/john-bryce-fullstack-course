import express, { Request, Response, Router } from "express";

import { productService } from "../services/product-service";
import { UserModel } from "../models/user-model";
import { userService } from "../services/user-service";
import { StatusCode } from "../models/enum";


// A LISTENER 
class UserController {

    // Create a router object which can listen on routes:
    public router: Router = express.Router();

    // Constructor:
    public constructor() {
        this.router.post("/api/register", this.addUser);


    }

    // Get all products:
    private async addUser(request: Request, response: Response): Promise<void> {

        const user = new UserModel(request.body);
        const dbUser = await userService.addUser(user);
        response.status(StatusCode.Created).json(dbUser);

    }

}

export const userController = new UserController();
