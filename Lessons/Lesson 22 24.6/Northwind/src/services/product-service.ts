import type { ProductModel } from "../models/product-model";

class ProductService {

    public async getAllProduct(): Promise<ProductModel[]> {
       const response = await fetch("http://localhost:3030/api/products");
       const products = response.json();
       return products;
    }




}

export const productService = new ProductService();
