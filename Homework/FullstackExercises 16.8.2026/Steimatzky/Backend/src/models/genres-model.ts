import z from "zod";
import { ClientError } from "./client-error";
import { StatusCode } from "./enums";

// Genre Schema:
const GenreSchema = z.object({
    id: z.number().int().positive().optional(), // INT AUTO_INCREMENT PRIMARY KEY
    name: z.string().min(1, "Name is required.").max(50, "Name can't exceed 50 characters.") // VARCHAR(50) NOT NULL
});

// Genre Interface (I = Interface):
type IGenreModel = z.infer<typeof GenreSchema>;

// Genre Model:
export class GenreModel implements IGenreModel {

    public id: number;
    public name: string;

    public constructor(Genre: GenreModel) { // Copy Constructor
        this.id = Genre.id;
        this.name = Genre.name;
    }

    public validate(): void {
        const result = GenreSchema.safeParse(this);
        if (!result.success) {
            const message = result.error.issues[0].path + ": " + result.error.issues[0].message;
            throw new ClientError(StatusCode.UnprocessableContent, message);
        }
    }

}
