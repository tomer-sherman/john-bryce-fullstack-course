import express, { Request, Response, Router } from "express";
import { categoryService } from "../services/category-service";


class CategoryController {

    public router: Router = express.Router();

    public constructor() {

        this.router.get("/api/category", this.getAllCategories);
    }


    
    private async getAllCategories(request: Request, response: Response): Promise<void> {
        const category = await categoryService.getAllCategory();
        response.json(category);
    }




}

export const categoryController = new CategoryController();