import z from "zod";
import { ClientError } from "./client-error";
import { StatusCode } from "./enum";
import { UploadedFile } from "express-fileupload";

// Product Schema FROM ZOD package
const productSchema = z.object({
    id: z.number().int().positive().optional(),
    name: z.string().min(2).max(100),
    price: z.number().min(0).max(1000),
    stock: z.number().int().min(0).max(1000),

    image: z.custom<UploadedFile>().optional(),
    imageUrl: z.url().optional(),
    


});

// Product Interface, a set of rules that classes have too follow a Contract if they shake hands with it.
type IProductModel = z.infer<typeof productSchema>;

// Product Model
export class ProductModel implements IProductModel {

    public id: number;
    public name: string;
    public price: number;
    public stock: number;
    public image: UploadedFile;
    public imageUrl: string;
    public imageName: string;


    public constructor(product: ProductModel) {
        this.id = product.id;
        this.name = product.name;
        this.price = +product.price;
        this.stock = +product.stock;
        this.image = product.image;
        this.imageUrl = product.imageUrl;
        this.imageName = product.imageName;

    }

    public validate(): void {
        const result = productSchema.safeParse(this);

        if (!result.success) {
            const message = result.error.issues[0].path + ": " + result.error.issues[0].message;
            throw new ClientError(StatusCode.UnprocessableContent, message);
        };
    }


}