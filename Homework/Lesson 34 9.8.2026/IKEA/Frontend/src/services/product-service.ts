import axios from "axios";
import { ProductModel } from "../models/product-model";
import { appConfig } from "../utils/app-config";

class ProductService {


    public async getAllProducts(): Promise<ProductModel[]> {


        const response = await axios.get<ProductModel[]>(appConfig.productUrl);
        const allProducts = response.data;

        return allProducts;



    }

    public async addProduct(product: ProductModel): Promise<ProductModel> {


        const response = await axios.post<ProductModel>(appConfig.productUrl, product);
        const dbProduct = response.data;

        return dbProduct;
    }





}

export const productService = new ProductService();
