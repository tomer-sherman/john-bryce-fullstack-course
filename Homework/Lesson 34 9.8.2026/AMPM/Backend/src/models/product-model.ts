import z from "zod";
import { ClientError } from "./client-error";
import { StatusCode } from "./enums";

// Product Schema - mirrors the `products` table:
const ProductSchema = z.object({

    // `id` INT NOT NULL AUTO_INCREMENT - not sent on insert:
    id: z.number().int().positive().optional(),

    // `name` VARCHAR(200) NOT NULL:
    name: z.string().trim().nonempty().max(200),

    // `manufactureDate` DATE NOT NULL:
    manufactureDate: z.iso.date(),

    // `expirationDate` DATE NOT NULL:
    expirationDate: z.iso.date(),

    // `categoryId` INT NOT NULL - FK to categories(id):
    categoryId: z.number().int().positive(),

    // `price` DECIMAL(7, 2) NOT NULL - chk_products_price:
    price: z.number().min(0).max(99999.99).multipleOf(0.01)

// chk_products_dates: `expirationDate` >= `manufactureDate`:
}).refine(product => product.expirationDate >= product.manufactureDate, {
    path: ["expirationDate"],
    message: "Expiration date must be on or after the manufacture date"
});

// Product Interface (I = Interface):
type IProductModel = z.infer<typeof ProductSchema>;

// Product Model:
export class ProductModel implements IProductModel {

    public id: number;
    public name: string;
    public manufactureDate: string;
    public expirationDate: string;
    public categoryId: number;
    public price: number;

    public constructor(product: ProductModel) { // Copy Constructor
        this.id = product.id;
        this.name = product.name;
        this.manufactureDate = product.manufactureDate;
        this.expirationDate = product.expirationDate;
        this.categoryId = product.categoryId;
        this.price = product.price;
    }

    public validate(): void {
        const result = ProductSchema.safeParse(this);
        if (!result.success) {
            const message = result.error.issues[0].path + ": " + result.error.issues[0].message;
            throw new ClientError(StatusCode.UnprocessableContent, message);
        }
    }

}
