import { EmployeeModel } from "../models/employee-model";
import { ProductModel } from "../models/product-model"
import { UserModel } from "../models/user-model";

export type AppState = {
    // AppStateL types that contains entire data for all the global state.
    products: ProductModel[];
    employees: EmployeeModel[];
    user: UserModel;
}