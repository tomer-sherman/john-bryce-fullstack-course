import { configureStore } from "@reduxjs/toolkit";
import { AppState } from "./app-state";
import { productSlice } from "./products-slice";
import { employeesSlice } from "./employees-slice";
import { userSlice } from "./user-slice";

// Store object - handling the entire global state:
export const store = configureStore<AppState>({
    reducer:{
        products : productSlice.reducer, // connect AppState products to products slice reducers
        employees: employeesSlice.reducer, // DON'T FORGET TOO REGISTER PROPERTIES BOTH TOO THE STORE/ AND APP STATE
        user: userSlice.reducer
    }
});