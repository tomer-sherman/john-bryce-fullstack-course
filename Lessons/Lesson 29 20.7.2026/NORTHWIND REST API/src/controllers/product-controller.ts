import express, { Request, Response, Router } from "express";

// A LISTENER 
class ProductController {

    // Create a router object which can listen on routes:
    public router: Router = express.Router();

    // Constructor:
    public constructor() {
        this.router.get("/api/products", this.getAllProducts);
    }

    // Get all products
    private getAllProducts(request: Request, response: Response): void {
        const demoProducts = ["Apple", "Banana", "Peach"];
        response.json(demoProducts);
    }

}

export const productController = new ProductController();
