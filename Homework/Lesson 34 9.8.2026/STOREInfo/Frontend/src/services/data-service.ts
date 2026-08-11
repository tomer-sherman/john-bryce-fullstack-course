import axios from "axios";
import { DataModel } from "../models/data-model";
import { appConfig } from "../utils/app-config";
import { CategoryModel } from "../models/category-model";

class ProductService {

    public async getAllStores(): Promise<DataModel[]> {

        const response = await axios.get<DataModel[]>(appConfig.storesUrl);
        return response.data;


    }

    public async getAllCategories(): Promise<CategoryModel[]> {

        const response = await axios.get<CategoryModel[]>(appConfig.categoryUrl);
        return response.data;

    }

}

export const productService = new ProductService();
