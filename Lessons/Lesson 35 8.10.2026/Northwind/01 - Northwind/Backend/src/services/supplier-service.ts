import { after } from "node:test";
import { ClientError } from "../models/client-error";
import { StatusCode } from "../models/enums";
import { ISupplierModel, SupplierModel } from "../models/supplier-model";

class SupplierService {

    public async getAllSuppliers(): Promise<ISupplierModel[]> {

        const supplier = await SupplierModel.find().populate("country").exec();
        return supplier;

    }

    public async getOneSupplier(_id: string): Promise<ISupplierModel> {
        const supplier = await SupplierModel.findById(_id).exec();
        if (!supplier) throw new ClientError(StatusCode.NotFound, `_id: ${_id} not found.`);
        return supplier;
    }

    public async addSupplier(supplier: ISupplierModel): Promise<ISupplierModel> {
        // Validate
        await ClientError.validate(supplier);

        const dbSupplier = await supplier.save();
        return dbSupplier;
    }

    public async updateSupplier(supplier: ISupplierModel): Promise<ISupplierModel> {

        await ClientError.validate(supplier);

        const dbSupplier = await SupplierModel.findByIdAndUpdate(supplier._id, supplier, { returnDocument: "after" }).exec(); // After returns the document as a promise after the update
        if (!dbSupplier) throw new ClientError(StatusCode.NotFound, `_id: ${supplier._id} not found.`);
        return dbSupplier;

    }

    public async deleteSupplier(_id: string): Promise<void> {

        const dbSupplier = await SupplierModel.findByIdAndDelete(_id).exec();
        if (!dbSupplier) throw new ClientError(StatusCode.NotFound, `_id: ${_id} not found.`);

    }

    public async getSomeSuppliers(): Promise<ISupplierModel[]> {



        // select * from suppliers
        //const suppliers = await SupplierModel.find().exec();

        // select * from suppliers where city = `London`
        //const suppliers = await SupplierModel.find({ city: "London" }).exec();

        // select * from suppliers where city = `London` and address = `49 Gilbert St.`
        //const suppliers = await SupplierModel.find({ city: "London", address: "49 Gilbert St." }).exec();

        // select * from suppliers where in (contactTitle = `Marketing Manager`,`Sales Representative` )
        //const suppliers = await SupplierModel.find({ contactTitle: { $in: ["Marketing Manager", "Sales Representative"] } }).exec();

        // select _id, companyName, phone from suppliers
        // const suppliers = await SupplierModel.find({}, {_id: false, companyName: true, phone: true }).exec()
        //const suppliers = await SupplierModel.find({}, ["-_id", "companyName", "phone"]).exec();

        //select * from suppliers order by companyName
        //const suppliers = await SupplierModel.find({}, {}, { sort: "companyName" }).exec();


        //select * from suppliers order by companyName
        //const suppliers = await SupplierModel.find({}, {}, { sort: "-companyName" }).exec();

        //select * from suppliers where contactTitle like `%sales%`
        //const suppliers = await SupplierModel.find({ contactTitle: { $regex: "Sales" } }).exec();

        //select companyName, contactName , city from suppliers where city = "London" or concatTitle = "Sales Representative" order by companyName
        const suppliers = await SupplierModel.find(


            { $or: [{ city: "London" }, { contactTitle: "Sales Representative" }] }, // Filter area, or in whatever
            ["-_id", "companyName", "contactName", "city"], // Projection 
            { sort: "companyName" } // Options
            

        )
            .exec();



        return suppliers;

    }


}

export const supplierService = new SupplierService();