import "./data.css";
import { useForm } from "react-hook-form";
import { ProductModel } from "../../../models/data-model";
import { productService } from "../../../services/data-service";
import { notify } from "../../../utils/notify";
import { useNavigate } from "react-router-dom";

export function Data() {

    const { register, handleSubmit, formState } = useForm<ProductModel>();
    const navigate = useNavigate();

    async function send(product: ProductModel) {

        try {
            await productService.addProduct(product);
            notify.success("Product Has Been Added");
            navigate("/home");
        }
        catch (err: any) {
            notify.error(err.message)
        }

    }

    return (
        <div className="Data">

            <form onSubmit={handleSubmit(send)}>

                <label>name: </label>
                <input type="text" {...register("name", {
                    required: "Name is required.",
                    maxLength: { value: 200, message: "Name must be up to 200 characters." },
                    setValueAs: (value: string) => value?.trim(), // Backend trims too.
                    validate: value => value.length > 0 || "Name cannot contain only spaces."
                })}></input>
                <span className="error">{formState.errors.name?.message}</span>

                <label>manufacture date:</label>
                <input type="date" {...register("manufactureDate", {
                    required: "Manufacture date is required."
                })} ></input>
                <span className="error">{formState.errors.manufactureDate?.message}</span>

                <label>expDate:</label>
                <input type="date" {...register("expirationDate", {
                    required: "Expiration date is required.",
                    // Both dates are "yyyy-MM-dd", so a string comparison is enough:
                    validate: (value, product) =>
                        !product.manufactureDate || value >= product.manufactureDate
                        || "Expiration date must be on or after the manufacture date."
                })} ></input>
                <span className="error">{formState.errors.expirationDate?.message}</span>

                <label>categoryId</label>
                <input type="number" {...register("categoryId", {
                    required: "Category id is required.",
                    valueAsNumber: true, // Without this the value is sent as a string.
                    min: { value: 1, message: "Category id must be a positive number." },
                    validate: value => Number.isInteger(value) || "Category id must be a whole number."
                })} ></input>
                <span className="error">{formState.errors.categoryId?.message}</span>

                <label>PrICE:</label>
                <input type="number" {...register("price", {
                    required: "Price is required.",
                    valueAsNumber: true, // Without this the value is sent as a string.
                    min: { value: 0, message: "Price can't be negative." },
                    max: { value: 99999.99, message: "Price must be up to 99999.99." },
                    // DECIMAL(7,2) - at most 2 digits after the dot:
                    validate: value => Math.abs(value * 100 - Math.round(value * 100)) < 1e-9
                        || "Price can have up to 2 digits after the dot."
                })} step={0.01} ></input>
                <span className="error">{formState.errors.price?.message}</span>

                <button disabled={formState.isSubmitting}>Send</button>

            </form>

        </div>
    );
}
