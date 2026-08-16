import express, { Request, Response, Router } from "express";
import { productService } from "../services/product-service";
import { ProductModel } from "../models/product-model";
import { StatusCode } from "../models/enums";

// Contains routes, without logic.
class ProductsController {

    // Create a router object which can listen on routes:
    public router: Router = express.Router();

    // Constructor - register routes:
    public constructor() {
        this.router.get("/api/products", this.getAllProducts);
        this.router.get("/api/products/:id", this.getOneProduct);
        this.router.post("/api/products", this.addProduct);
        this.router.put("/api/products/:id", this.updateProduct);
        this.router.delete("/api/products/:id", this.deleteProduct);
        this.router.get("/api/products/category/:id", this.getProductsByCategory);
    }

    // Get : 
    private async getAllProducts(request: Request, response: Response): Promise<void> {
        const products = await productService.getAllProducts();
        response.json(products);
    }

    private async getOneProduct(request: Request, response: Response): Promise<void> {

        const productId = +request.params.id;
        const product = await productService.getOneProduct(productId);
        response.json(product);


    }

    private async addProduct(request: Request, response: Response): Promise<void> {

        const product = new ProductModel(request.body);
        const dbProduct = await productService.addProduct(product);
        response.json(dbProduct).status(StatusCode.Created);
    }

    private async updateProduct(request: Request, response: Response): Promise<void> {

        request.body.id = + request.params.id;
        const product = new ProductModel(request.body);
        const dbProduct = await productService.updateProduct(product);
        response.json(dbProduct).status(StatusCode.Created);



    }

    private async deleteProduct(request: Request, response: Response): Promise<void> {

        const prodId = +request.params.id;
        await productService.deleteProduct(prodId);
        response.status(StatusCode.NoContent).json();

    }


    private async getProductsByCategory(request: Request, response: Response): Promise<void> {

        const categoryId = +request.params.id;
        const productsByCategory = await productService.getProductsByCategory(categoryId);
        response.json(productsByCategory);



    }

}

export const productsController = new ProductsController();
