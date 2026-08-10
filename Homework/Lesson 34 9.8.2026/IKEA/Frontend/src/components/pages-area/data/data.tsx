import { useNavigate } from "react-router-dom";
import { ProductModel } from "../../../models/product-model";
import { productService } from "../../../services/product-service";
import { notify } from "../../../utils/notify";
import "./data.css";
import { useForm } from "react-hook-form"


export function Data() {

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ProductModel>({});
    const navigate = useNavigate();

    async function send(product: ProductModel) {
        try {
            await productService.addProduct(product);
            navigate("/home");
            notify.success("Succesfuly added the product")
        }
        catch (err: any) { notify.error(err.message) }


    }

    return (
        <div className="Data">

            <form onSubmit={handleSubmit(send)} noValidate>

                <h2>Add Product</h2>
                <p className="sub">new unit → products table</p>

                <div className={"field" + (errors.categoryId ? " bad" : "")}>
                    <label htmlFor="categoryId">Category</label>
                    <select id="categoryId" defaultValue="" {...register("categoryId", {
                        valueAsNumber: true,
                        validate: {
                            // An unselected <select> becomes NaN once valueAsNumber runs:
                            picked: v => !Number.isNaN(v) || "Please choose a category",
                            range: v => (v >= 1 && v <= 3) || "Category must be between 1 and 3"
                        }
                    })}>
                        <option value="" disabled>Select a Category</option>
                        <option value={1}>Couches</option>
                        <option value={2}>Tables</option>
                        <option value={3}>Closets</option>
                    </select>
                    <span className="err">{errors.categoryId?.message}</span>
                </div>

                <div className={"field" + (errors.size ? " bad" : "")}>
                    <label htmlFor="size">Size</label>
                    <input id="size" type="text" placeholder="200x90x75 cm" {...register("size", {
                        required: "Size is required",
                        minLength: { value: 5, message: "Size must be at least 5 characters" },
                        maxLength: { value: 30, message: "Size must be up to 30 characters" }
                    })} />
                    <span className="err">{errors.size?.message}</span>
                </div>

                <div className={"field" + (errors.color ? " bad" : "")}>
                    <label htmlFor="color">Color</label>
                    <input id="color" type="text" placeholder="graphite" {...register("color", {
                        required: "Color is required",
                        minLength: { value: 2, message: "Color must be at least 2 characters" },
                        maxLength: { value: 30, message: "Color must be up to 30 characters" }
                    })} />
                    <span className="err">{errors.color?.message}</span>
                </div>

                <div className={"field" + (errors.price ? " bad" : "")}>
                    <label htmlFor="price">Price</label>
                    <input id="price" type="number" step={0.01} placeholder="1299.90" {...register("price", {
                        valueAsNumber: true,
                        validate: {
                            filled: v => !Number.isNaN(v) || "Price is required",
                            positive: v => v > 0 || "Price must be above 0",
                            max: v => v <= 99999.99 || "Price must be up to 99999.99",
                            steps: v => Number.isInteger(Math.round(v * 100)) && Math.abs(v * 100 - Math.round(v * 100)) < 1e-9
                                || "Price must be in steps of 0.01"
                        }
                    })} />
                    <span className="err">{errors.price?.message}</span>
                </div>

                <button disabled={isSubmitting}>{isSubmitting ? "Sending…" : "Add Product"}</button>

            </form>
        </div>
    );
}
