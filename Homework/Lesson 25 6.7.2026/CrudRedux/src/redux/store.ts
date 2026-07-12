import { configureStore } from "@reduxjs/toolkit";
import { AppState } from "./app-state";
import { suppliersSlice } from "./suppliers-slice";


export const store = configureStore<AppState>({
    reducer: {
        suppliers: suppliersSlice.reducer
    }
})