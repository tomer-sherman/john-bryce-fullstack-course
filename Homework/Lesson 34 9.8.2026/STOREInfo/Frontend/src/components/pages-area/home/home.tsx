import { useEffect, useState } from "react";
import "./home.css";
import { CategoryModel } from "../../../models/category-model";
import { DataModel } from "../../../models/data-model";
import { notify } from "../../../utils/notify";
import { productService } from "../../../services/data-service";

export function Home() {
    const [categories, setCategories] = useState<CategoryModel[]>([]);
    const [stores, setStores] = useState<DataModel[]>([]);
    const [category, setCategory] = useState<number>(0);

    useEffect(() => {

        // .catch and not try/catch: these promises reject asynchronously,
        // long after the try block has already finished running.
        productService.getAllCategories()
            .then(c => setCategories(c))
            .catch(err => notify.error(err));

        productService.getAllStores()
            .then(s => setStores(s))
            .catch(err => notify.error(err));

    }, [])

    function changeStoresByCategory(event: React.ChangeEvent<HTMLSelectElement>) {

        // The value of an <option> is always a string --> + converts it back to a number:
        setCategory(+event.target.value);
    }

    // Filtered on every render, from the stores we already fetched ONE TIME on mount.
    // No reason to hit the API again - the data is already here, in the component.
    // category 0 = "All", so nothing is filtered out:
    const categoryStores = category === 0
        ? stores
        : stores.filter(s => s.category === category);

    return (
        <div className="Home">

            <div className="hero">
                <span className="eyebrow">Store Directory</span>
                <h2>Browse stores by category</h2>
                <p>Every store in the database, filtered live in the browser.</p>
            </div>

            <div className="stats">
                <div className="stat">
                    <span className="value">{stores.length}</span>
                    <span className="label">Total stores</span>
                </div>
                <div className="stat">
                    <span className="value">{categories.length}</span>
                    <span className="label">Categories</span>
                </div>
                <div className="stat">
                    <span className="value">{categoryStores.length}</span>
                    <span className="label">Showing</span>
                </div>
            </div>

            <div className="toolbar">
                <label htmlFor="category-select">Filter by category</label>
                <select id="category-select" value={category} onChange={changeStoresByCategory}>
                    <option value={0}>All categories</option>
                    {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
            </div>

            {categoryStores.length === 0 && (
                <div className="empty">
                    <p>No stores in this category.</p>
                </div>
            )}

            <div className="grid">
                {categoryStores.map(s =>
                    <article className="card" key={s.id}>
                        <span className="tag">{s.categoryName}</span>
                        <h3>{s.name}</h3>
                        <p className="address">{s.address}</p>
                        <span className="id">ID {String(s.id).padStart(3, "0")}</span>
                    </article>
                )}
            </div>

        </div>
    );
}
