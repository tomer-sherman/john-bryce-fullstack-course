import axios from "axios";
import { ProductModel } from "../models/product-model";
import { appConfig } from "../utils/app-config";
import { formUtil } from "../utils/form-util";
import { store } from "../redux/store";
import { productSlice } from "../redux/products-slice";

class ProductService {

    // Fetch all products:
    public async getAllProducts(): Promise<ProductModel[]> {

        // If we have products in global -return them.
        if(store.getState().products.length >0){
            return store.getState().products;
        }

        // We don't have products in our global state.
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
        const products = response.data;
        
        // Init all products:
        // const type = "products-slice/initProducts"; // slice-name/reducer-name
        // const payload = products;
        // const action = {type, payload};
        const action = productSlice.actions.initProducts(products); // Same as the above 3 lines
        store.dispatch(action);                

        return products;
    }

    // Fetch one product:
    public async getOneProduct(id: number): Promise<ProductModel> {

        // If product exist in the global state- return it:
        const product = store.getState().products.find(p=> p.id === id);
        if(product){
            return product
        }

        // We don't have the product in the global state, Go too the server and return it.
        const response = await axios.get<ProductModel>(appConfig.productsUrl + "/" + id);
        const dbProduct = response.data;

        return dbProduct;
    }

    // Add product: 
    public async addProduct(product: ProductModel): Promise<void> {





        const response = await axios.post<ProductModel>(appConfig.productsUrl, formUtil.toFormData(product));
        const dbProduct = response.data;
        
        // Add product too global state:
        const action = productSlice.actions.addProduct(dbProduct)
        store.dispatch(action);
    }

    // Update product: 
    public async updateProduct(product: ProductModel): Promise<void> {

        
        // Send product too back end
        const response = await axios.put<ProductModel>(appConfig.productsUrl + "/" + product.id, formUtil.toFormData(product));
        const dbProduct = response.data;

        // Add product in global state
        const action = productSlice.actions.updateProduct(dbProduct);
        store.dispatch(action);

        
    }

    // Delete product:
    public async deleteProduct(id: number): Promise<void> {
        // Delete product in back end
        await axios.delete(appConfig.productsUrl + "/" + id);

        // Delete product in global state
        const action = productSlice.actions.deleteProduct(id);
        store.dispatch(action);

    }

    //Get top products

    public async getTopProducts(): Promise<ProductModel[]>{

        // const token = localStorage.getItem("token");

        // const options = {
        //     headers:{
        //         authorization: "Bearer " + token
        //     }
        // };

       // const response = await axios.get<ProductModel[]>(appConfig.topProductsUrl, options);
        // IF you have an interceptor then there is no need too Write the code above


        const response = await axios.get<ProductModel[]>(appConfig.topProductsUrl); // IF you use an inteceptor, here on the right of the url sits the Auth token. for every HTTP request
        const products = response.data;
        return products;
    

    }

}

export const productService = new ProductService();





// // Using fetch: 
// class ProductService {

//     public async getAllProducts(): Promise<ProductModel[]> {
//         const response = await fetch(appConfig.productsUrl);
//         const products = await response.json();
//         return products;
//     }

//     public async getOneProduct(id: number): Promise<ProductModel> {
//         const response = await fetch(appConfig.productsUrl + "/" + id);
//         const product = await response.json();
//         return product;
//     }

//     public async addProduct(product: ProductModel): Promise<void> {
//         const options = {
//             method: "POST", // Send a POST request
//             headers: {
//                 "Content-Type": "application/json" // send the data in JSON format
//             },
//             body: JSON.stringify(product) // Send the product
//         };
//         const response = await fetch(appConfig.productsUrl, options);
//         const dbProduct = await response.json();
//         console.log(dbProduct);
//     }

// }

