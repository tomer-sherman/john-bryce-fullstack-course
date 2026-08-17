import express, { Request, Response, Router } from "express";
import { supplierService } from "../services/supplier-service";
import { ISupplierModel, SupplierModel } from "../models/supplier-model";
import { StatusCode } from "../models/enums";
import { saleService } from "../services/sales-service";
import { SaleModel } from "../models/sale-model";


class SalesController {
    // Create a router object which can listen on routes:
    public router: Router = express.Router();

    public constructor() {

        this.router.get("/api/sales", this.getAllSales);
        this.router.get("/api/sales/:_id", this.getOneSale);
        this.router.post("/api/sales", this.addSale);


    }


    private async getAllSales(request: Request, response: Response): Promise<void> {

        const sales = await saleService.getAllSales();
        response.json(sales);

    }


    private async getOneSale(request: Request, response: Response): Promise<void> {

        const _id = request.params._id.toString();
        const sale = await saleService.getOneSale(_id);
        response.json(sale);

    }


    private async addSale(request: Request, response: Response): Promise<void> {
     
        const saleToAdd = new SaleModel(request.body);
        const dbSale = await saleService.addSale(saleToAdd);
        response.json(dbSale);
    }






}

export const salesController = new SalesController()