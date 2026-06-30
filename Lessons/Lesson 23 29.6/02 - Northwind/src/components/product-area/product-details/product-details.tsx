import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./product-details.css";
import { productService } from "../../../services/product-service";
import { useEffect, useState } from "react";
import { ProductModel } from "../../../models/product-model";





export function ProductDetails() {

    const [product, setProduct] = useState<ProductModel>();
    const navigate = useNavigate();


    //Route parameters object:
    const params = useParams();

    // Read route parameter:
    const id = Number(params.prodId); // prodId is the same name used in the route

    console.log(id); // Since you goo too another component, all the list of products from before has been deleted.
    // Thus we have too learn how too use Global State.

    // But for WE WILL learn how too use it using local state.
    useEffect(() => {
        productService.getOneProduct(id)
            .then(dbProduct => setProduct(dbProduct))
            .catch(err => alert(err.message))

    }, [])


    async function deleteMe() {
        try {
            const sure = confirm("Are you sure???");
            if (!sure) return;

            await productService.deleteProduct(id);
            alert("product has been deleted");
            navigate("/products");
            
        }
        catch (err: any) {
            alert(err.message);
        }
    }


    return (
        <div className="ProductDetails">

            <h3>Name: {product?.name}</h3>
            <h3>Price: {product?.price}</h3>
            <h3>Stock: {product?.stock}</h3>
            <img src={product?.imageUrl} />
            <br /><br />

            <NavLink to="/products">Back</NavLink>
            <span> |</span>
            <NavLink to={"/products/edit/" + product?.id}>Edit</NavLink>

            <span>|</span>
            <NavLink to="#" onClick={deleteMe}>Delete</NavLink>
            

        </div>
    );
}
