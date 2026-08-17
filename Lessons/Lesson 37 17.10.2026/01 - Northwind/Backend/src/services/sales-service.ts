import { after } from "node:test";
import { ClientError } from "../models/client-error";
import { StatusCode } from "../models/enums";
import { ISupplierModel, SupplierModel } from "../models/supplier-model";
import { ISalesModel, SaleModel } from "../models/sale-model";

class SaleService {

    public async getAllSales(): Promise<ISalesModel[]> {

        const sales = await SaleModel.find().exec();
        return sales;

    }

    public async getOneSale(_id: string): Promise<ISalesModel> {
        const sale = await SaleModel.findById(_id).exec();
        if (!sale) throw new ClientError(StatusCode.NotFound, `_id: ${_id} not found.`);
        return sale;
    }

    public async addSale(sale: ISalesModel): Promise<ISalesModel> {
        // Validate
        await ClientError.validate(sale);

        const dbSale = await sale.save();
        return dbSale;
    }

   


}

export const saleService = new SaleService();