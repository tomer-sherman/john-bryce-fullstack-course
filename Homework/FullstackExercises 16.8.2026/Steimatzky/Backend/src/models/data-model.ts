import z from "zod";
import { ClientError } from "./client-error";
import { StatusCode } from "./enums";

// Book Schema:
const BookSchema = z.object({
    id: z.number().int().positive().optional(), // INT AUTO_INCREMENT PRIMARY KEY
    name: z.string().min(1, "Name is required.").max(100, "Name can't exceed 100 characters."), // VARCHAR(100) NOT NULL
    summary: z.string().min(1, "Summary is required.").max(1000, "Summary can't exceed 1000 characters."), // VARCHAR(1000) NOT NULL
    genre: z.number().int().positive("Genre must be an existing genre id."), // INT NOT NULL, FOREIGN KEY genres(id)
    genreName: z.string().min(1, "Name is required.").max(50, "Name can't exceed 50 characters.").optional(),
    price: z.number().positive("Price must be positive.").max(999999.99, "Price can't exceed 999999.99.").multipleOf(0.01, "Price can have at most 2 decimal places."), // DECIMAL(8, 2) NOT NULL
    stock: z.number().int().nonnegative("Stock can't be negative.") // INT NOT NULL

});

// Book Interface (I = Interface):
type IBookModel = z.infer<typeof BookSchema>;

// Book Model:
export class BookModel implements IBookModel {

    public id: number;
    public name: string;
    public summary: string;
    public genre: number;
    public genreName: string;
    public price: number;
    public stock: number;

    public constructor(Book: BookModel) { // Copy Constructor
        this.id = Book.id;
        this.name = Book.name;
        this.summary = Book.summary;
        this.genre = Book.genre;
        this.price = Book.price;
        this.stock = Book.stock;
        this.genreName = Book.genreName;
    }

    public validate(): void {
        const result = BookSchema.safeParse(this);
        if (!result.success) {
            const message = result.error.issues[0].path + ": " + result.error.issues[0].message;
            throw new ClientError(StatusCode.UnprocessableContent, message);
        }
    }

}
