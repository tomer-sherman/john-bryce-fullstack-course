import { OkPacketParams } from "mysql2";
import { ProductModel } from "../models/products-model";
import { dal } from "../util/dal";
import { ClientError } from "../models/client-error";
import { StatusCode } from "../models/enum";
import { appConfig } from "../util/app-config";
import { saver } from "smart-saver";

class ProductService {


    public async getAllProducts(): Promise<ProductModel[]> {

        // Create SQL:
        const sql = "select *, concat(?, imageName) as imageUrl from products";
        const values = [appConfig.productImagesBaseUrl!];

        //execute 
        const products = await dal.execute(sql, values) as ProductModel[];

        // Return
        return products;

    }

    //Get one product
    public async getOneProduct(id: number): Promise<ProductModel> {

        // Create SQL:
        const sql = "select *, concat(?,imageName) as imageUrl from products where id = ?";
        const values = [appConfig.productImagesBaseUrl!, id];

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

        // UUID, too put only UUID into the data base and not a real name.
        // Using smart save,

        const imageName = await saver.save(product.image);

        const sql = "insert into products(name, price, stock, imageName) values(?,?,?,?)"
        const values = [product.name, product.price, product.stock, imageName];


        const info: OkPacketParams = await dal.execute(sql, values) as OkPacketParams;


        //Get added product:
        const dbProduct = await this.getOneProduct(info.insertId!);

        return dbProduct;

    }

    public async updateProduct(product: ProductModel): Promise<ProductModel> {

        //Validate:
        product.validate();

        // Fetch imageName from the product.
        const oldImageName = await this.getImageName(product.id);
        const newImageName = await saver.update(product.image, oldImageName!);

        // SQL:
        const sql = "update products set name = ?, price = ?, stock = ?, imageName = ? where id = ?"
        const values = [product.name, product.price, product.stock, newImageName, product.id];

        // Execute:
        const info: OkPacketParams = await dal.execute(sql, values) as OkPacketParams;

        if (info.affectedRows === 0) { throw new ClientError(StatusCode.NotFound, `Id ${product.id} not found`) }

        //Get added product:
        const dbProduct = await this.getOneProduct(product.id);

        return dbProduct;

    }

    public async deleteProduct(id: number): Promise<void> {
        // Find image name
        const oldImageName = await this.getImageName(id);

        //SQL
        const sql = "delete from products where id = ?"
        const values = [id];

        const info: OkPacketParams = await dal.execute(sql, values) as OkPacketParams;

        if (info.affectedRows === 0) { throw new ClientError(StatusCode.NotFound, `Id ${id} not found`) }

        // Delete image only after deleting
        await saver.delete(oldImageName!);

    };


    public async getImageName(id: number): Promise<string | null> {

        const sql = "select imageName from products where id = ?";
        const values = [id];
        const productArr = await dal.execute(sql, values) as ProductModel[];
        const product = productArr[0];
        if (!product) return null;
        return product.imageName;

    }

}

export const productService = new ProductService();