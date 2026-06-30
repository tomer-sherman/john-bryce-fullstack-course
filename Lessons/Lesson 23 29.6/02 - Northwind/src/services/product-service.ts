import axios from "axios";
import { ProductModel } from "../models/product-model";
import { appConfig } from "../utils/app-config";

class ProductService {

    // Fetch all products:
    public async getAllProducts(): Promise<ProductModel[]> {
        // const response = await fetch(appConfig.productsUrl);
        // const products = await response.json();
        // return products;

        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
        const products = response.data;
        return products;
    }

    //Fetch one product this is get:
    public async getOneProduct(id: number): Promise<ProductModel> {
        // const response = await fetch(appConfig.productsUrl + "/" + id);
        // const product = await response.json();
        // return product;

        const response = await axios<ProductModel>(appConfig.productsUrl + "/" + id);
        const product = response.data;
        return product;
    }

    // Add product this is post:
    public async addProduct(product: ProductModel): Promise<void> {
        // const options = {
        //     method: "post", // Send a POST request
        //     headers:{
        //         "Content-type":"application/json" // The data is sent as JSON format.
        //     },
        //     body: JSON.stringify(product) // Send the product as JSON!!
        // };

        // const response = await fetch(appConfig.productsUrl, options );
        // const dbProduct = await response.json();
        // console.log(dbProduct);

        // This sends json, thus making sending images not even get too the server. 
        // You have too send in a different way. FormData();

        // Convert data into form data so we could send also the iner image!
        const productFormData = new FormData();
        productFormData.append("name", product.name);
        productFormData.append("price", product.price.toString());
        productFormData.append("stock", product.stock.toString());
        productFormData.append("image", product.image);


        const response = await axios.post<ProductModel>(appConfig.productsUrl, productFormData);
        const dbProduct = response.data;
        console.log(dbProduct);

    };

    // Update product
    public async updateProduct(product: ProductModel):Promise<void>{

        const productFormData = new FormData();
        productFormData.append("name", product.name);
        productFormData.append("price", product.price.toString());
        productFormData.append("stock", product.stock.toString());
        productFormData.append("image", product.image);

        // Another thing that changed, is the specific url api. you need too add backslash and the id.
        const response = await axios.put<ProductModel>(appConfig.productsUrl + "/" + product.id, productFormData); 
        // KEEP IN MIND I CHANGED POST TOO PUT, Put is changing all of the info from the frontend
        // Patch is just adding a single prop.

        const dbProduct = response.data;
        console.log(dbProduct);


    };

    // Delete product
     public async deleteProduct(id:number):Promise<void>{
        // Simple af
        await axios.delete(appConfig.productsUrl+ "/" +id);
    };


}

export const productService = new ProductService();
