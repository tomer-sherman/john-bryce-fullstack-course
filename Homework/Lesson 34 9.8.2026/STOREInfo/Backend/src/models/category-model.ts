import z from "zod";
import { ClientError } from "./client-error";
import { StatusCode } from "./enums";

// Category Schema:
const CategorySchema = z.object({

    // category.id --> INT AUTO_INCREMENT PRIMARY KEY (not sent on insert):
    id: z.number().int().positive().optional(),

    // category.name --> VARCHAR(50) NOT NULL UNIQUE:
    name: z.string()
        .nonempty("Name is missing")
        .max(50, "Name can't exceed 50 chars"),

});

// Category Interface (I = Interface):
type ICategoryModel = z.infer<typeof CategorySchema>;

// Category Model:
export class CategoryModel implements ICategoryModel {

    public id: number;
    public name: string;

    public constructor(Category: CategoryModel) {
        this.id = Category.id;
        this.name = Category.name;
    }

    public validate(): void {
        const result = CategorySchema.safeParse(this);
        if (!result.success) {
            const message = result.error.issues[0].path + ": " + result.error.issues[0].message;
            throw new ClientError(StatusCode.UnprocessableContent, message);
        }
    }

}
