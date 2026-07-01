import { useEffect, useState } from "react";
import type { ProductModel } from "../../../models/product-model";
import { productService } from "../../../services/product-service";
import { ProductCard } from "../product-card/product-card";
import "./product-list.css";

export function ProductList() {


    const [products, setProducts] = useState<ProductModel[]>([])

    // The use the productService, here since its a class, go return too teh product-Service, that is in services, too understand what sits here.
    // This isn't good, cause for each product it renders the screen!!!!!
    

    useEffect(() => {
        productService.getAllProduct().
            then(allProducts =>
                setProducts(allProducts)).
            catch(err => alert(err.message));
    })


    return (
        <div className="ProductList">

            {products.map(p => <ProductCard key={p.id} product={p} />)}

        </div>
    );
}
