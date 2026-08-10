import z from "zod";
import { ClientError } from "./client-error";
import { StatusCode } from "./enums";

// Data Schema:
const DataSchema = z.object({

    // stores.id --> INT AUTO_INCREMENT PRIMARY KEY (not sent on insert):
    id: z.number().int().positive().optional(),

    // stores.name --> VARCHAR(100) NOT NULL:
    name: z.string()
        .nonempty("Name is missing")
        .max(100, "Name can't exceed 100 chars"),

    // stores.category --> INT NOT NULL, FK --> category(id):
    category: z.number({ error: "Category must be a number" })
        .int("Category must be an integer")
        .positive("Category must be positive"),

    // stores.address --> VARCHAR(255) NOT NULL:
    address: z.string()
        .nonempty("Address is missing")
        .max(255, "Address can't exceed 255 chars"),

    // category.name --> VARCHAR(50) NOT NULL UNIQUE (taken from the join, not sent on insert):
    categoryName: z.string()
        .nonempty("Category name is missing")
        .max(50, "Category name can't exceed 50 chars")
        .optional(),

});

// Data Interface (I = Interface):
type IDataModel = z.infer<typeof DataSchema>;

// Data Model:
export class DataModel implements IDataModel {

    public id: number;
    public name: string;
    public category: number;
    public address: string;
    public categoryName: string;

    public constructor(Data: DataModel) {
        this.id = Data.id;
        this.name = Data.name;
        this.category = Data.category;
        this.address = Data.address;
        this.categoryName = Data.categoryName;
    }

    public validate(): void {
        const result = DataSchema.safeParse(this);
        if (!result.success) {
            const message = result.error.issues[0].path + ": " + result.error.issues[0].message;
            throw new ClientError(StatusCode.UnprocessableContent, message);
        }
    }

}
