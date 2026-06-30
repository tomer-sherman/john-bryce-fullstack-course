import { useForm } from "react-hook-form";
import "./add-product.css";
import { ProductModel } from "../../../models/product-model";
import { productService } from "../../../services/product-service";
import { useNavigate } from "react-router-dom";

export function AddProduct() {

    // Hook Usage area.
    const { register, handleSubmit } = useForm<ProductModel>();
    const navigate = useNavigate();


    async function send(product: ProductModel) {
        try {
            // Extract the single file from the filelist back into product.image.
            product.image = (product.image as unknown as FileList)[0]; // This is doubleCasting it is used when you want, too cast a type backwards in the inheretance tree
            // Cause in this case fileList is the child of File. and not the opposite , that is why you need double casting.
            // Send 
            await productService.addProduct(product);

            alert("Product has been added.");
            navigate("/products");
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="AddProduct">

            <form onSubmit={handleSubmit(send)}>

                <label>Name</label>
                <input type="text" {...register("name")} minLength={2} maxLength={50} required />

                <label>Price</label>
                <input type="number" {...register("price")} required min={0} max={1000} step="0.01" />

                <label>Stock</label>
                <input type="number" {...register("stock")} required min={0} max={1000} />

                <label>Image</label>
                <input type="file" accept="image/*" {...register("image")} required />

                <button >Add</button>
            </form>

        </div>
    );
}
