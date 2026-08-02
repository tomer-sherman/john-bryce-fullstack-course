import { OkPacketParams } from "mysql2";
import { ProductModel } from "../models/products-model";
import { dal } from "../util/dal";
import { ClientError } from "../models/client-error";
import { StatusCode } from "../models/enum";

class ProductService {


    public async getAllProducts(): Promise<ProductModel[]> {

        // Create SQL:
        const sql = "select * from products";

        //execute 
        const products = await dal.execute(sql) as ProductModel[];

        // Return
        return products;

    }

    //Get one product
    public async getOneProduct(id: number): Promise<ProductModel> {

        // Create SQL:
        const sql = "select * from products where id = ?";
        const values = [id];

        //execute 
        const products = await dal.execute(sql, values) as ProductModel[];

        const product = products[0];

        if (!product) { throw new ClientError(StatusCode.NotFound, "This product does not exist!") };

        // Return
        return product;
    }

    // Add product:
    public async addOneProduct(product: ProductModel): Promise<ProductModel> {

        //Validation:
        product.validate();

        const sql = "insert into products(name, price, stock) values(?,?,?)"
        const values = [product.name, product.price, product.stock];


        const info: OkPacketParams = await dal.execute(sql, values) as OkPacketParams;


        //Get added product:
        const dbProduct = await this.getOneProduct(info.insertId!);

        return dbProduct;

    }

    public async updateProduct(product: ProductModel): Promise<ProductModel> {

        //Validate:
        product.validate();

        // SQL:
        const sql = "update products set name = ?, price = ?, stock = ? where id = ?"
        const values = [product.name, product.price, product.stock, product.id];

        // Execute:
        const info: OkPacketParams = await dal.execute(sql, values) as OkPacketParams;

        if (info.affectedRows === 0) { throw new ClientError(StatusCode.NotFound, `Id ${product.id} not found`) }

        //Get added product:
        const dbProduct = await this.getOneProduct(product.id);

        return dbProduct;

    }

    public async deleteProduct(id: number): Promise<void> {

        //SQL
        const sql = "delete from products where id = ?"
        const values = [id];

        const info: OkPacketParams = await dal.execute(sql, values) as OkPacketParams;

        if (info.affectedRows === 0) { throw new ClientError(StatusCode.NotFound, `Id ${id} not found`) }


    }

}

export const productService = new ProductService();