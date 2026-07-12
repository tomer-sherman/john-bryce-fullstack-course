import { configureStore } from "@reduxjs/toolkit";
import { AppState } from "./app-state";
import { suppliersSlice } from "./suppliers-slice";
import { userSlice } from "./user-slice";


export const store = configureStore<AppState>({
    reducer: {
        suppliers: suppliersSlice.reducer,
        user: userSlice.reducer
    }
})