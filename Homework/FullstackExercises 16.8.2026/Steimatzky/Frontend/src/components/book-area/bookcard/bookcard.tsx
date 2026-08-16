import { BookModel } from "../../../models/data-model";
import "./bookcard.css";

type BookProps = {

    book: BookModel;
    onDelete: (id: number) => void;

}

export function Bookcard(props: BookProps) {
    return (
        <div className="Bookcard">

            <p>Name: {props.book.name}</p>
            <span>Price: {props.book.price}$</span>
            <span>Stock: {props.book.stock}</span>
            <span>Genre: {props.book.genreName}</span>
            <span>Summery: {props.book.summary}</span>
            <button onClick={() => props.onDelete(props.book.id)}>Delete ME</button>

        </div>
    );
}
