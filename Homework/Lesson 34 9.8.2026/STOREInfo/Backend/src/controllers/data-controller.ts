import express, { Request, Response, Router } from "express";
import { dataService } from "../services/data-service";
import { DataModel } from "../models/data-model";
import { StatusCode } from "../models/enums";

// Contains routes, without logic.
class DataController {

    // Create a router object which can listen on routes:
    public router: Router = express.Router();

    // Constructor - register routes:
    public constructor() {
        this.router.get("/api/stores", this.getAllStores);
        this.router.get("/api/category", this.getAllCategories);
        this.router.post("/api/stores", this.addStore);
    }

    // Get : 
    private async getAllStores(request: Request, response: Response): Promise<void> {

        const products = await dataService.getAllStores();
        response.json(products);


    }

    private async getAllCategories(request: Request, response: Response): Promise<void> {

        const categories = await dataService.getAllCategories();
        response.json(categories);


    }

    private async addStore(request: Request, response: Response): Promise<void> {

        const storeToAdd = new DataModel(request.body);
        const store = await dataService.addStore(storeToAdd);

        response.json(store).status(StatusCode.Created);



    }

}

export const dataController = new DataController();
