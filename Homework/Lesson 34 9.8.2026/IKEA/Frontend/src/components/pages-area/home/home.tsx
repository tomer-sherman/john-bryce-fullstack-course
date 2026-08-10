import { useEffect, useState } from "react";
import "./home.css";
import { ProductModel } from "../../../models/product-model";
import { productService } from "../../../services/product-service";
import { notify } from "../../../utils/notify";


export function Home() {

    const [products, setProducts] = useState<ProductModel[]>([]);


    useEffect(() => {

        productService.getAllProducts()
            .then(products => setProducts(products))
            .catch(err => notify.error(err.message))


    }, [])




    return (
        <div className="Home">

            <div className="head">
                <h2>Inventory</h2>
                <span className="count">{products.length} units</span>
            </div>

            {products.length === 0 && <div className="empty">no units loaded</div>}

            <div className="grid">

                {products.map(p => <article className="card" key={p.id}>

                    <div className="top">
                        <span className="tag">{p.categoryName}</span>
                        <span className="uid">#{String(p.id).padStart(3, "0")}</span>
                    </div>

                    <dl>
                        <div>
                            <dt>Size</dt>
                            <dd>{p.size}</dd>
                        </div>
                        <div>
                            <dt>Color</dt>
                            <dd>
                                <span className="swatch" style={{ background: p.color }} />
                                {p.color}
                            </dd>
                        </div>
                    </dl>

                    <span className="price">₪{p.price}</span>

                </article>)}

            </div>

        </div>
    );
}
