import { useEffect, useState } from "react";
import "./top-products.css";
import { productService } from "../../../services/product-service";
import { notify } from "../../../utils/notify";
import { ProductModel } from "../../../models/product-model";
import { ProductCard } from "../../product-area/product-card/product-card";
import { useIsUser } from "../../employee-area/admin/hooks/use-user";

export function TopProducts() {


useIsUser();

const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        productService.getTopProducts()
            .then(allProducts => setProducts(allProducts))
            .catch(err => notify.error(err));
    }, []);



    return (
        <div className="TopProducts">

            {products.map(p => <ProductCard key={p.id} product={p} />)}

        </div>
    );
}
