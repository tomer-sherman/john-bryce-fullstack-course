import { Document, model, Schema, Types } from "mongoose";

// Interface
export interface ISalesModel extends Document {
    _id: Types.ObjectId;
    details: string;


}

// Schema
export const SalesSchema = new Schema<ISalesModel>({
    details: {
        type: String,
        minLength: 10,
        maxLength: 500,
        trim: true,
        required: true
    }
}, {
    versionKey: false,
    id: false
});




// Model
export const SaleModel = model<ISalesModel>("SaleModel", SalesSchema, "sales"); // This is the connecting point too the DB