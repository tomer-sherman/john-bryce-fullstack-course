import { CategoryModel, ProductModel } from "../models/data-model";
import axios from "axios";
import { appConfig } from "../utils/app-config";


class ProductService {

    public async getAllCategories(): Promise<CategoryModel[]> {
        const response = await axios.get<CategoryModel[]>(appConfig.categoriesUrl);
        const categories = response.data;
        return categories;
    }


    public async getAllProducts(): Promise<ProductModel[]> {
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
        const products = response.data;
        return products
    }

    public async getProductsByCategory(categoryId: number): Promise<ProductModel[]> {

        const response = await axios.get<ProductModel[]>(appConfig.productsByCategoryUrl + categoryId);
        const products = response.data;
        return products;

    }

    public async addProduct(product: ProductModel): Promise<ProductModel> {

        const response = await axios.post<ProductModel>(appConfig.productsUrl, product);
        const dbProduct = response.data;
        return dbProduct;

    }

    public async deleteProduct(id: number): Promise<void> {

        await axios.delete(appConfig.productsUrl + id);

    }
}

export const productService = new ProductService();
