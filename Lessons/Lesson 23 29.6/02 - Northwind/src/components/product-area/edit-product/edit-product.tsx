import { useForm } from "react-hook-form";
import { ProductModel } from "../../../models/product-model";
import { productService } from "../../../services/product-service";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export function EditProduct() {
    // Hook Usage area. // local State mannegment.
    const { register, handleSubmit, setValues } = useForm<ProductModel>();
    const navigate = useNavigate();
    const params = useParams();
    const id = Number(params.prodId);

    useEffect(()=>{
        productService.getOneProduct(id)
        .then(dbProduct => {
            setValues(dbProduct)
        })
        .catch(err=>alert(err.message));
    },[])

    async function send(product: ProductModel) {
        try {
            // These 2 lines, pretty much change the specific prop dynamically inorder
            // for the server too get this specific data prop.
            product.id = id;
            if(product.image){
                product.image = (product.image as unknown as FileList)[0];
            } 
            await productService.updateProduct(product);
            
            alert("Product has been updated.");
            navigate("/products");
        }
        catch (err: any) {
            alert(err.message);
        }
    }
    return (
        <div className="EditProduct">

            <form onSubmit={handleSubmit(send)}>

                <label>Name</label>
                <input type="text" {...register("name")} minLength={2} maxLength={50} required />

                <label>Price</label>
                <input type="number" {...register("price")} required min={0} max={1000} step="0.01" />

                <label>Stock</label>
                <input type="number" {...register("stock")} required min={0} max={1000} />

                <label>Image</label>
                <input type="file" accept="image/*" {...register("image")} />

                <button >Add</button>
            </form>
        </div>
    );
}
