import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SupplierModel } from "../models/supplier-model";

function addSupplier(currentState: SupplierModel[], action: PayloadAction<SupplierModel>): SupplierModel[] {

    const supplierToAdd = action.payload;
    const newSate = [...currentState];
    newSate.push(supplierToAdd);
    return newSate

}

function initSuppliers(_currentState: SupplierModel[], action: PayloadAction<SupplierModel[]>): SupplierModel[] {
    const suppliersToInit = action.payload;
    const newState = suppliersToInit;
    return newState;
}

function deleteSupplier(currentState: SupplierModel[], action: PayloadAction<number>): SupplierModel[] {
    const idToDelete = action.payload;
    const newSate = [...currentState];
    const index = newSate.findIndex(s => s.id === idToDelete);

    if (index >= 0) {
        newSate.splice(index, 1);
    }

    return newSate;
}

function updateSupplier(currentState: SupplierModel[], action: PayloadAction<SupplierModel>): SupplierModel[] {
    const supplierToUpdate = action.payload;
    const newState = [...currentState];

    const index = newState.findIndex(s => s.id === supplierToUpdate.id);

    if (index >= 0) {
       newState[index] = supplierToUpdate;
    }

    return newState;
}

export const suppliersSlice = createSlice({
    name:"suppliers-slice",
    initialState: [] as SupplierModel[],
    reducers: {addSupplier, initSuppliers, updateSupplier, deleteSupplier}
})