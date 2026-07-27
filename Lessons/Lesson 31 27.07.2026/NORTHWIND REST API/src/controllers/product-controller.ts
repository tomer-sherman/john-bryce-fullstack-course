import express, { Request, Response, Router } from "express";
import { ProductModel } from "../models/products-model";
import { productService } from "../services/product-service";
import { StatusCode } from "../models/enum";
import { ClientError } from "../models/client-error";

// A LISTENER 
class ProductController {

    // Create a router object which can listen on routes:
    public router: Router = express.Router();

    // Constructor:
    public constructor() {
        this.router.get("/api/products", this.getAllProducts);
        this.router.get("/api/products/:id", this.getOneProduct);
        this.router.post("/api/products", this.addProduct);
        this.router.put("/api/products/:id", this.updateProduct);
        this.router.delete("/api/products/:id", this.deleteProduct);

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

        const product = new ProductModel(request.body);
        const dbProduct = await productService.addOneProduct(product);
        response.status(StatusCode.Created).json(dbProduct);

    }

    private async updateProduct(request: Request, response: Response): Promise<void> {

        request.body.id = + request.params.id;
        const product = new ProductModel(request.body);
        const dbProduct = await productService.updateProduct(product);
        response.json(dbProduct);
    }

    private async deleteProduct(request: Request, response: Response): Promise<void> {

        const id = +request.params.id;
        const dbProduct = await productService.deleteProduct(id);
        response.status(StatusCode.NoContent).json(dbProduct);

    }



}

export const productController = new ProductController();
