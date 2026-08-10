import z from "zod";
import { ClientError } from "./client-error";
import { StatusCode } from "./enums";

// Data Schema:
const DataSchema = z.object({
    id: z.number().int().positive().optional(),
    categoryId: z.number().int().positive().min(1).max(3),
    size: z.string().min(5).max(30),
    color: z.string().min(2).max(30),
    price: z.number().positive().min(0).max(99999.99).multipleOf(0.01, "Price must be in steps of 0.01")
});

// Data Interface (I = Interface):
type IDataModel = z.infer<typeof DataSchema>;

// Data Model:
export class ProductModel implements IDataModel {

    public id: number;
    public categoryId: number;
    public size: string;
    public color: string;
    public price: number;

    // Not a real column - comes from the join with the categories table:
    public categoryName: string;



    public constructor(product: ProductModel) {
        this.id = product.id;
        this.categoryId = product.categoryId;
        this.size = product.size;
        this.color = product.color;
        this.price = product.price;
        this.categoryName = product.categoryName;
    }











    public validate(): void {
        const result = DataSchema.safeParse(this);
        if (!result.success) {
            const message = result.error.issues[0].path + ": " + result.error.issues[0].message;
            throw new ClientError(StatusCode.UnprocessableContent, message);
        }
    }

}
