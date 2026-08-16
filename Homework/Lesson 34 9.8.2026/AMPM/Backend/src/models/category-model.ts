import z from "zod";
import { ClientError } from "./client-error";
import { StatusCode } from "./enums";

// Category Schema - mirrors the `categories` table:
const CategorySchema = z.object({

    // `id` INT NOT NULL AUTO_INCREMENT - not sent on insert:
    id: z.number().int().positive().optional(),

    // `name` VARCHAR(100) NOT NULL - uq_categories_name:
    name: z.string().trim().nonempty().max(100)

});

// Category Interface (I = Interface):
type ICategoryModel = z.infer<typeof CategorySchema>;

// Category Model:
export class CategoryModel implements ICategoryModel {

    public id: number;
    public name: string;

    public constructor(category: CategoryModel) { // Copy Constructor
        this.id = category.id;
        this.name = category.name;
    }

    public validate(): void {
        const result = CategorySchema.safeParse(this);
        if (!result.success) {
            const message = result.error.issues[0].path + ": " + result.error.issues[0].message;
            throw new ClientError(StatusCode.UnprocessableContent, message);
        }
    }

}
