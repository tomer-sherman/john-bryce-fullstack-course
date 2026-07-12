import { SupplierModel } from "../models/supplier-model";

class FormUtil {

    //Convert form supplier into FormData, so we could send all the info too the server:

    public toFormData(supplier: SupplierModel): FormData {
        const supplierFormData = new FormData();
        supplierFormData.append("company", supplier.company);
        supplierFormData.append("country", supplier.country);
        supplierFormData.append("city", supplier.city)
        supplierFormData.append("address", supplier.address);
        supplierFormData.append("phone", supplier.phone);
        supplierFormData.append("image", supplier.image);
        return supplierFormData
    }
}

export const formUtil = new FormUtil();
