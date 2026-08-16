import { OkPacketParams } from "mysql2";
import { ProductModel } from "../models/product-model";
import { dal } from "../utils/dal";
import { OK } from "zod/v3";
import { ClientError } from "../models/client-error";
import { StatusCode } from "../models/enums";

// Logic:
class ProductService {

    // Get all products:
    public async getAllProducts(): Promise<ProductModel[]> {

        const sql = `select * from products`;
        const products = await dal.execute(sql) as ProductModel[];
        return products;

    }

    public async getOneProduct(id: number): Promise<ProductModel> {

        const sql = `select * from products where id = ?`;
        const values = [id];

        const productArr = await dal.execute(sql, values) as ProductModel[];
        const product = productArr[0];

        return product;


    }

    public async addProduct(product: ProductModel): Promise<ProductModel> {

        product.validate();

        const sql = `insert into products (name, manufactureDate, expirationDate,categoryId,price) values(?,?,?,?,?)`;
        const values = [product.name, product.manufactureDate, product.expirationDate, product.categoryId, product.price];

        const info = await dal.execute(sql, values) as OkPacketParams;

        const dbProduct = await this.getOneProduct(info.insertId!);

        return dbProduct;


    }

    public async updateProduct(product: ProductModel): Promise<ProductModel> {
        product.validate();

        const sql = `update products set name = ?, manufactureDate = ?,expirationDate = ?, categoryId = ?, price = ? where id = ?`;
        const values = [product.name, product.manufactureDate, product.expirationDate, product.categoryId, product.price, product.id];

        const info = await dal.execute(sql, values) as OkPacketParams;

        if (info.affectedRows = 0) { throw new ClientError(StatusCode.NotFound, " The product you are trying to update does not exist.") };


        const dbProduct = await this.getOneProduct(info.insertId!);

        return dbProduct;

    }

    public async deleteProduct(id: number): Promise<void> {
        const sql = `delete from products where id = ?`;
        const values = [id];
        const info = await dal.execute(sql, values) as OkPacketParams;
        if (info.affectedRows === 0) { throw new ClientError(StatusCode.NotFound, `The product you are trying to delete does not exist.`) };
    }


    public async getProductsByCategory(categoryId: number): Promise<ProductModel[]> {


        const sql = `select * from products where categoryId = ?`;
        const values = [categoryId];

        const products = await dal.execute(sql, values) as ProductModel[];

        if (products.length === 0) throw new ClientError(StatusCode.NotFound, "The category you are filtering your products with does not exist.")

        return products;


    }


}

export const productService = new ProductService();
