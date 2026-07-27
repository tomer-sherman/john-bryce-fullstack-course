import express, { Request, Response, Router } from "express";
import { ProductModel } from "../models/products-model";
import { productService } from "../services/product-service";

// A LISTENER 
class ProductController {

    // Create a router object which can listen on routes:
    public router: Router = express.Router();

    // Constructor:
    public constructor() {
        this.router.get("/api/products", this.getAllProducts);
        this.router.get("/api/products/:id", this.getOneProduct);
        this.router.post("/api/products", this.addProduct);
    }



    // Get all products:
    private async getAllProducts(request: Request, response: Response): Promise<void> {
        const products = await productService.getAllProducts();
        response.json(products);
    }

    private async getOneProduct(request: Request, response: Response): Promise<void> {

        const id = +request.params.id;
        const products = await productService.getOneProduct(id);
        response.json(products);
    }


    private async addProduct(request: Request, response: Response): Promise<void> {
        const product = request.body;
        const dbProduct = await productService.getOneProduct(product);
        response.status(201).json(dbProduct);
    }

}

export const productController = new ProductController();
