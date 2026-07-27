import z from "zod";
import { ClientError } from "./client-error";
import { StatusCode } from "./enum";

// Product Schema FROM ZOD package
const productSchema = z.object({
    id: z.number().int().positive().optional(),
    name: z.string().min(2).max(100),
    price: z.number().min(0).max(1000),
    stock: z.number().int().min(0).max(1000),
});

// Product Interface, a set of rules that classes have too follow a Contract if they shake hands with it.
type IProductModel = z.infer<typeof productSchema>;

// Product Model
export class ProductModel implements IProductModel {

    public id: number;
    public name: string;
    public price: number;
    public stock: number;


    public constructor(product: ProductModel) {
       this.id = product.id;
       this.name = product.name;
       this.price = product.price;
       this.stock = product.stock;
    }

    public validate(): void {
        const result = productSchema.safeParse(this);

        if (!result.success) {
            const message = result.error.issues[0].path + ": " + result.error.issues[0].message;
            throw new ClientError(StatusCode.UnprocessableContent, message);
        };
    }


}