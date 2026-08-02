import z from "zod";
import { StatusCode } from "./enum";

// Uses the Zod
const productSchema = z.object({
    id: z.number().int().positive().optional(),
    name: z.string().min(2).max(100),
    category_id: z.number().int().min(1).max(3),
    price: z.number().min(0).max(100000),
    image_url: z.url().max(255),
    stock: z.number().int().min(0).max(1000),
    is_active: z.number().int().min(0).max(1)
})


type IProductModel = z.infer<typeof productSchema>;

export class ProductModel implements IProductModel {

    public id: number;
    public name: string;
    public category_id: number;
    public price: number;
    public stock: number;
    public image_url: string;
    public is_active: number;

    public constructor(product: ProductModel) {

        this.id = product.id;
        this.name = product.name;
        this.category_id = product.category_id;
        this.price = product.price;
        this.stock = product.stock;
        this.image_url = product.image_url;
        this.is_active = product.is_active;

    }

    public validate(): void {
        const result = productSchema.safeParse(this);

        if (!result.success) {
            const message = result.error.issues[0].path + ": " + result.error.issues[0].message;
            throw new Error(StatusCode.UnprocessableContent + " | " + message);
        }


    }


}