import { useEffect, useState } from "react";
import { ProductModel } from "../../../models/product-model";
import { productService } from "../../../services/product-service";
import { ProductCard } from "../product-card/product-card";
import "./product-list.css";

export function ProductList() {

    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        productService.getAllProducts()
            .then(allProducts => setProducts(allProducts))
            .catch(err => alert(err.message));
    }, []);

    return (
        <div className="ProductList">

            {products.map(p => <ProductCard key={p.id} product={p} />)}

        </div>
    );
}
