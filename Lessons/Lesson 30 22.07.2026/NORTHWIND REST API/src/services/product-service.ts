import { OkPacketParams } from "mysql2";
import { ProductModel } from "../models/products-model";
import { dal } from "../util/dal";

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

       const product = products[0]

       // Return
       return product;
    }

    // Add product:
    public async addOneProduct(product: ProductModel):Promise<ProductModel>{

        // SQL: GG IN THE CHAT DONT DO THIS SHIT ' can come out of your, string.
        //const sql = `insert into products(name, price, stock) values('${product.name}',${product.price},${product.stock})`

        const sql = "insert into products(name, price, stock) values(?,?,?)"
        const values = [product.name, product.price, product.stock];


        const info: OkPacketParams = await dal.execute(sql, values) as OkPacketParams;
        

        //Get added product:
        const dbProduct = await this.getOneProduct(info.insertId!);

        return dbProduct;

    }

}

export const productService = new ProductService();