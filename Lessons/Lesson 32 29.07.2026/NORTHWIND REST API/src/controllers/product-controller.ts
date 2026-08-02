import express, { Request, Response, Router } from "express";
import { ProductModel } from "../models/products-model";
import { productService } from "../services/product-service";
import { StatusCode } from "../models/enum";
import { securityMiddleware } from "../middleware/security-middleware";
import path from "node:path";
import { saver } from "smart-saver";

// A LISTENER 
class ProductController {

    // Create a router object which can listen on routes:
    public router: Router = express.Router();

    // Constructor:
    public constructor() {
        this.router.get("/api/products", this.getAllProducts);
        this.router.get("/api/products/:id", this.getOneProduct);

        this.router.post("/api/products", securityMiddleware.verifyLoggedIn, this.addProduct);
        this.router.put("/api/products/:id", securityMiddleware.verifyLoggedIn, this.updateProduct);
        this.router.delete("/api/products/:id", securityMiddleware.verifyLoggedIn, this.deleteProduct);
        this.router.get("/api/products/images/:imageName", this.getImage);


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



        request.body.image = request.files?.image;

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

    //Get image by name:
    private getImage(request: Request, response: Response): void {

        const imageName = request.params.imageName.toString();
        const filePath = saver.getFilePath(imageName);
        response.sendFile(filePath);

    }



}

export const productController = new ProductController();
