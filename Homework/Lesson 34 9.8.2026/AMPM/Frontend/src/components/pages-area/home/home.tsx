import React, { useEffect, useState } from "react";
import "./home.css";
import { CategoryModel, ProductModel } from "../../../models/data-model";
import { productService } from "../../../services/data-service";
import { notify } from "../../../utils/notify";

export function Home() {
    const [categories, setCategories] = useState<CategoryModel[]>([]);
    const [products, setProducts] = useState<ProductModel[]>([]);



    useEffect(() => {

        productService.getAllCategories()
            .then(c => setCategories(c))
            .catch(err => notify.error(err.message));

    }, [])


    async function filterByCategories(event: React.ChangeEvent<HTMLSelectElement>) {
        try {
            const categoryId = +event.target.value;
            if (categoryId === 0) { productService.getAllProducts().then(p => setProducts(p)) }
            else { productService.getProductsByCategory(categoryId).then(pc => setProducts(pc)) }

        }
        catch (err: any) {
            notify.error(err.message);
        }

    }

    async function deleteProduct(id: number) {

        try {
            const sure = confirm("Are you sure you want to delete this product?");
            if (!sure) return;

            await productService.deleteProduct(id);

            // Remove the deleted product from the state, so the list refreshes:
            setProducts(currentProducts => currentProducts.filter(p => p.id !== id));

            notify.success("Product has been deleted.");
        }
        catch (err: any) {
            notify.error(err);
        }

    }

    return (
        <div className="Home">

            <label>Filter By Category:</label>
            <select onChange={filterByCategories}>
                <option value={0}>All Categories</option>
                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>

            {products.map(p => <div key={p.id} className="product">

                <span>{p.name}</span>
                <span>{p.manufactureDate}</span>
                <span>{p.expirationDate}</span>
                <span>{p.price}</span>
                <span>{p.categoryId}</span>

                <button onClick={() => deleteProduct(p.id)}>Delete</button>

            </div>)}

        </div>
    );
}
