import express, { Request, Response, Router } from "express";
import { productService } from "../services/product-service";
import { StatusCode } from "../models/enums";
import { ProductModel } from "../models/product-model";


// Contains routes, without logic.
class ProductController {

    // Create a router object which can listen on routes:
    public router: Router = express.Router();

    // Constructor - register routes:
    public constructor() {
        this.router.get("/api/products", this.getAllProducts);
        this.router.post("/api/products", this.addProduct);
    }

    // Get : 
    private async getAllProducts(request: Request, response: Response): Promise<void> {

        const allProduct = await productService.getAllProducts();
        response.json(allProduct);

    }

    private async addProduct(request: Request, response: Response): Promise<void> {

        const frontProduct = new ProductModel(request.body);
        const productToAdd = await productService.addProduct(frontProduct);
        response.json(productToAdd).status(StatusCode.Created);

    }

   

}

export const productController = new ProductController();
