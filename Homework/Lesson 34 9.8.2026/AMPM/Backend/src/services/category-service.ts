import { CategoryModel } from "../models/category-model";
import { dal } from "../utils/dal";


class CategoryService {


    public async getAllCategory(): Promise<CategoryModel[]> {

        const sql = `select * from categories`;
        const categories = await dal.execute(sql) as CategoryModel[];
        return categories;
    }



}


export const categoryService = new CategoryService();