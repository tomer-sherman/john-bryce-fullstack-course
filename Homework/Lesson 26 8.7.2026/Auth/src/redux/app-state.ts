import { SupplierModel } from "../models/supplier-model"
import { UserModel } from "../models/user-model";


export type AppState = {
    suppliers: SupplierModel[];
    user: UserModel;
}