import type { ProductModel } from "../../../models/product-model";
import "./product-card.css";

type ProductCardProps = {
	product: ProductModel;
};

// I wanna see the name price stock and image on the side

export function ProductCard(props: ProductCardProps) {
    return (
        <div className="ProductCard">

			<div>
                <span>name: {props.product.name}</span>
                <span>price: {props.product.price}</span>
                <span>stock: {props.product.stock}</span>
            </div>

            <div>
                <img src={props.product.imageUrl}></img>
            </div>

        </div>
    );
}
