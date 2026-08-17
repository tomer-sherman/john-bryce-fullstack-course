import { Document, model, Schema, Types } from "mongoose";
import { CountryModel } from "./country-model";

// Interface
export interface ISupplierModel extends Document {
    _id: Types.ObjectId;
    companyName: string;
    contactName: string;
    contactTitle: string;
    city: string;
    address: string;
    phone: string;
    fax: string;
    countryId: Types.ObjectId;

}

// Schema
export const SupplierSchema = new Schema<ISupplierModel>({
    // Don't create _id: Types.ObjectId crashes when adding a new object.

    companyName: {
        type: String,
        required: true,
        maxLength: 100,
        trim: true,
        unique: true
    },
    contactName: String,
    contactTitle: String,
    city: String,
    address: String,
    phone: String,
    fax: String,
    countryId: Types.ObjectId

}, {
    versionKey: false, // Don't add __v field to each document.
    toJSON: { virtuals: true }, // This makes the join possible, i need too go over this again.
    id: false // Don't duplicate_id to id.
});

// Virtual field
SupplierSchema.virtual("country", {
    ref: CountryModel, //Which model we're connection to
    localField: "countryId",// which field in out model exists in the relation. what is the prop name in this model.
    foreignField: "_id", // Which field exists in the other relation.   what is the prop name in the foreign collection.
    justOne: true // Each supplier has only one country - return object in country field Not an array. a more acurate way too work
});



// Model
export const SupplierModel = model<ISupplierModel>("SupplierModel", SupplierSchema, "suppliers"); // "model name", "schema", "collection"