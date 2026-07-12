

// Reducer - add products:

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductModel } from "../models/product-model";

//  Reducer -add product:
function addProduct(currentState: ProductModel[], action: PayloadAction<ProductModel>): ProductModel[] {
    const productToAdd = action.payload; // Take product too add.!!!
    const newState = [...currentState]; // Duplicates currentState into new state.
    newState.push(productToAdd); // Add the product.
    return newState; // Returns the newState so it could replace the currentState.
}

// Reducer -- update:

function updateProduct(currentState: ProductModel[], action: PayloadAction<ProductModel>): ProductModel[] {
    const productToUpdate = action.payload; // Take the object too update.
    const newState = [...currentState]; // Duplicate currentState into newState.
    const index = newState.findIndex(p => p.id === productToUpdate.id); // Find the index of the product too update.
    if (index >= 0) {
        newState[index] = productToUpdate; // Update that product.
    }

    return newState; // Return the new state so it could replace the currentState.

}

// Reducer -- delete product;

function deleteProduct(currentState: ProductModel[], action: PayloadAction<number>): ProductModel[] {
    const idTooDelete = action.payload; // The object you want too delete.
    const newState = [...currentState]; // Duplicate the currentState.
    const index = newState.findIndex(p=> p.id === idTooDelete); // find the object.

   if (index >= 0) {
    newState.splice(index, 1); // Delete the index item from new state
   }

   return newState;
}

// Init all products:
                    // UNDER LINE HERE you have too give this argument even tho it is not used.
function initProducts(_currentState: ProductModel[], action: PayloadAction<ProductModel[]>): ProductModel[]{
    const productsToInit = action.payload; // Take all products to init.
    const newState = productsToInit; // NEW STATE is the given products. since it doesn't consist of anything yet
    return newState; // Return new state too init all products.
}

// Slice for handling products:

export const productSlice = createSlice({
    name: "products-slice", // Unique name for this slice.
    initialState: [] as ProductModel[] , // The initial state before calling any reducer.
    reducers:{addProduct, updateProduct, deleteProduct, initProducts} // Our reducers
});



