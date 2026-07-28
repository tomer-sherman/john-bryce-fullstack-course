import { Router } from "express";
import express, { Request, Response } from "express";
import { productService } from "../services/product-service";
import { ProductModel } from "../models/product-model";
import { StatusCode } from "../models/enum";


class ProductController {

    // Creates a router object that listen's too Routes, That funnel into this controller.
    public router: Router = express.Router();

    //Constructor, here we create the routes, that this specific controller listen's too.
    public constructor() {
        this.router.get("/api/products", this.getAllProducts);
        this.router.get("/api/products/:id", this.getOneProduct);
        this.router.post("/api/products", this.addProduct);
        this.router.put("/api/products/:id", this.updateProduct);
        this.router.delete("/api/products/:id", this.deleteProduct);
    }
    // NO need for status code 200 since its the defult for both this functions.
    private async getAllProducts(request: Request, response: Response): Promise<void> {

        const products = await productService.getAllProducts();
        response.json(products);

    }

    private async getOneProduct(request: Request, response: Response): Promise<void> {

        const id = +request.params.id;
        const product = await productService.getOneProduct(id);
        response.json(product);

    }

    private async addProduct(request: Request, response: Response): Promise<void> {

        const product = new ProductModel(request.body);
        const dbProduct = await productService.addProduct(product);
        response.status(StatusCode.Created).json(dbProduct);

    }

    private async updateProduct(request: Request, response: Response): Promise<void> {

        // Why is it that you need too equalize this in an update func.
        request.body.id = +request.params.id;

        const product = new ProductModel(request.body);
        const dbProduct = await productService.updateProduct(product);
        response.json(dbProduct);

    }

    private async deleteProduct(request: Request, response: Response): Promise<void> {

        // It need id from the params inorder too activate the service which uses this id too delete this in the DB.
        const id = +request.params.id;
        const dbProduct = await productService.deleteProduct(id);
        response.status(StatusCode.NoContent).json(dbProduct);

    }



}

export const productController = new ProductController();