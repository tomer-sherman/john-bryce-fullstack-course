import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BookModel, GenreModel } from "../../../models/data-model";
import { productService } from "../../../services/data-service";
import { notify } from "../../../utils/notify";
import "./add-book-form.css";
import { useNavigate } from "react-router-dom";

export function AddBookForm() {

    const { register, handleSubmit, formState, reset } = useForm<BookModel>();

    const [genres, setGenres] = useState<GenreModel[]>([]);

    const navigate = useNavigate();

    useEffect(() => {

        productService.getAllGenres()
            .then(genres => setGenres(genres))
            .catch(err => notify.error(err));

    }, []);

    async function send(book: BookModel) {
        try {
            // Inputs return strings - convert to numbers as the backend expects:
            book.genre = +book.genre;
            book.price = +book.price;
            book.stock = +book.stock;

            await productService.addBook(book);
            notify.success("Book has been added.");
            reset();
            navigate("/home");

        }
        catch (err) {
            notify.error(err);
        }
    }

    return (
        <div className="AddBookForm">

            <form onSubmit={handleSubmit(send)} noValidate>

                <label>Name:</label>
                <input type="text" {...register("name", {
                    required: "Name is required.",
                    maxLength: { value: 100, message: "Name can't exceed 100 characters." }
                })} />
                <span className="error">{formState.errors.name?.message}</span>

                <label>Summary:</label>
                <textarea rows={4} {...register("summary", {
                    required: "Summary is required.",
                    maxLength: { value: 1000, message: "Summary can't exceed 1000 characters." }
                })}></textarea>
                <span className="error">{formState.errors.summary?.message}</span>

                <label>Genre:</label>
                <select {...register("genre", {
                    required: "Genre is required."
                })}>
                    <option value="">Select a genre...</option>
                    {genres.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
                </select>
                <span className="error">{formState.errors.genre?.message}</span>

                <label>Price:</label>
                <input type="number" step="0.01" {...register("price", {
                    required: "Price is required.",
                    min: { value: 0.01, message: "Price must be positive." },
                    max: { value: 999999.99, message: "Price can't exceed 999999.99." },
                    pattern: { value: /^\d+(\.\d{1,2})?$/, message: "Price can have at most 2 decimal places." }
                })} />
                <span className="error">{formState.errors.price?.message}</span>

                <label>Stock:</label>
                <input type="number" step="1" {...register("stock", {
                    required: "Stock is required.",
                    min: { value: 0, message: "Stock can't be negative." },
                    pattern: { value: /^\d+$/, message: "Stock must be a whole number." }
                })} />
                <span className="error">{formState.errors.stock?.message}</span>

                <button type="submit">Add Book</button>

            </form>

        </div>
    );
}
