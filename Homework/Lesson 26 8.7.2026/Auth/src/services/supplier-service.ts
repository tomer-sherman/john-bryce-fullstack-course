import axios from "axios";
import type { SupplierModel } from "../models/supplier-model";
import { appConfig } from "../utils/app-config";
import { formUtil } from "../utils/form-util";
import { store } from "../redux/store";
import { suppliersSlice } from "../redux/suppliers-slice";

class SupplierService {

    public async getAllSuppliers(): Promise<SupplierModel[]> {

        //CHECK IN GLOBAL STATE IF THEY EXIST
        if (store.getState().suppliers.length > 0) {
            return store.getState().suppliers;
        }

        // If NOT Go too server too fetch info
        const response = await axios.get<SupplierModel[]>(appConfig.supplierUrl);
        const suppliers = response.data;

        //Store in global state if they don't exist
        const action = suppliersSlice.actions.initSuppliers(suppliers);
        store.dispatch(action);

        return suppliers;
    }


    public async deleteSupplier(id: number): Promise<void> {

        // Delete in the server
        await axios.delete<SupplierModel>(appConfig.supplierUrl + "/" + id);

        //Delete in Global State
        const action = suppliersSlice.actions.deleteSupplier(id);
        store.dispatch(action);
    }

    public async getOneSupplier(id: number): Promise<SupplierModel> {
        // Check if single supplier exist in global state:
        const supplier = store.getState().suppliers.find(s => s.id === id);
        if (supplier) return supplier;

        // If not then fetches from server:
        const response = await axios.get<SupplierModel>(appConfig.supplierUrl + "/" + id);
        const dbSupplier = response.data;

        return dbSupplier;
    }


    public async updateSupplier(supplier: SupplierModel): Promise<void> {


        // Update the supplier from the server
        const response = await axios.put<SupplierModel>(appConfig.supplierUrl + "/" + supplier.id, formUtil.toFormData(supplier))
        console.log(response);

        //Update in global state
        const action = suppliersSlice.actions.updateSupplier(supplier);
        store.dispatch(action);



    }

    public async addSupplier(supplier: SupplierModel): Promise<void> {


        // Add the data too the server
        const response = await axios.post<SupplierModel>(appConfig.supplierUrl, formUtil.toFormData(supplier));
        console.log(response);

        // Add data too the global state
        const action = suppliersSlice.actions.addSupplier(supplier);
        store.dispatch(action);

    }


}

export const supplierService = new SupplierService();
