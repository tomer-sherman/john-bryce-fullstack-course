import { OkPacketParams } from "mysql2";
import { ClientError } from "../models/client-error";
import { StatusCode } from "../models/enum";
import { ProductModel } from "../models/product-model";
import { dal } from "../util/dal";


class ProductService {


    public async getAllProducts(): Promise<ProductModel[]> {

        // Create SQL:
        const sql = "select * from products";

        //Execute
        const products = await dal.execute(sql) as ProductModel[];

        //Return
        return products;

    }

    public async getOneProduct(productId: number): Promise<ProductModel> {

        const sql = "select * from products where id = ?"
        const values = [productId];

        // Since dal gives back only arrays you need too implement this kind of code.
        const productArr = await dal.execute(sql, values) as ProductModel[];
        const product = productArr[0];

        // Error handling if the product does not exist.
        if (!product) { throw new ClientError(StatusCode.NotFound, "This product does not exist!") };

        return product;
    }

    public async addProduct(product: ProductModel): Promise<ProductModel> {

        // Validated the data that the user added
        product.validate();

        // Sql insert
        const sql = "insert into products(name,category_id ,price, stock, image_url, is_active) values(?,?,?,?,?,?)";
        const values = [product.name, product.category_id, product.price, product.stock, product.image_url, product.is_active];


        const info = await dal.execute(sql, values) as OkPacketParams;
        const dbProduct = await this.getOneProduct(info.insertId!);


        return dbProduct;
    }

    public async updateProduct(product: ProductModel): Promise<ProductModel> {

        // validate:
        product.validate();

        const sql = "update products set name = ?, category_id = ?, price = ?, stock = ?, image_url = ?, is_active = ? where id = ?";
        const values = [product.name, product.category_id, product.price, product.stock, product.image_url, product.is_active, product.id];

        const info = await dal.execute(sql, values) as OkPacketParams;

        // UPDATE has no insertId — "row didn't exist" shows up as affectedRows === 0.
        if (info.affectedRows === 0) {
            throw new ClientError(StatusCode.NotFound, `Id ${product.id} not found`);
        }

        // Read back by the id we already know, NOT insertId.
        const dbProduct = await this.getOneProduct(product.id);

        return dbProduct;
    }

    public async deleteProduct(id: number): Promise<void> {

        const sql = "delete from products where id = ?"
        const values = [id];

        const info = await dal.execute(sql, values) as OkPacketParams;

        if (info.affectedRows === 0) { throw new ClientError(StatusCode.NotFound, "The product that you are trying to delete does not exist!") }

    }





}

export const productService = new ProductService();