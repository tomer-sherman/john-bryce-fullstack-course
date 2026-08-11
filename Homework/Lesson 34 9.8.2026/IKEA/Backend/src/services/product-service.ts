import { OkPacketParams } from "mysql2";
import { ProductModel } from "../models/product-model";
import { dal } from "../utils/dal";

// Logic:
class ProductService {

    // Get all products:
    public async getAllProducts(): Promise<ProductModel[]> {


        const sql = `
            select
                P.id,
                P.categoryId,
                C.category as categoryName,
                P.color,
                P.size,
                P.price
            from products as P
            join categories as C on P.categoryId = C.id
        `;

        const allProducts = await dal.execute(sql) as ProductModel[];

        return allProducts;

    }


    public async addProduct(product: ProductModel): Promise<ProductModel> {

        product.validate();

        const sql = `insert into products (categoryId, color, size, price) values(?, ?, ?, ?)`
        const values = [product.categoryId, product.color, product.size, product.price]

        const info = await dal.execute(sql, values) as OkPacketParams;

        const dbProduct = await this.getOneProduct(info.insertId!);

        return dbProduct;

    }


    public async getOneProduct(id: number): Promise<ProductModel> {

        const sql = `select * from products where id = ?`;
        const values = [id];

        const productArr = await dal.execute(sql, values) as ProductModel[];
        const product = productArr[0];

        return product;

    }
}

export const productService = new ProductService();
