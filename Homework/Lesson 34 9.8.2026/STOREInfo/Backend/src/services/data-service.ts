import { OkPacketParams } from "mysql2";
import { CategoryModel } from "../models/category-model";
import { DataModel } from "../models/data-model";
import { dal } from "../utils/dal";

// Logic:
class DataService {

    // Get all products:
    public async getAllStores(): Promise<DataModel[]> {


        const sql = `
            select
                stores.id,
                stores.name,
                stores.category,
                stores.address,
                category.name as categoryName
            from stores
            join category on stores.category = category.id
        `;
        const stores = await dal.execute(sql) as DataModel[];
        return stores;

    }

    public async getAllCategories() {

        const sql = `select * from category`;
        const categories = await dal.execute(sql) as CategoryModel[];
        return categories;

    }


    public async addStore(store: DataModel): Promise<DataModel> {

        store.validate();

        const sql = `insert into stores (name , category, address) values(?,?,?)`;
        const values = [store.name, store.category, store.address];

        const info = await dal.execute(sql, values) as OkPacketParams;

        const storeToAdd = await this.getOneStore(info.insertId!);

        return storeToAdd;

    }

    public async getOneStore(id: number): Promise<DataModel> {

        const sql = `select * from stores where id = ?`;
        const values = [id];

        const storeArr = await dal.execute(sql, values) as DataModel[];
        const store = storeArr[0];


        return store;


    }


}


export const dataService = new DataService();
