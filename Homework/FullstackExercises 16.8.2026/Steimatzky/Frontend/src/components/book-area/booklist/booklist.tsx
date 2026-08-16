import { useEffect, useState } from "react";
import "./booklist.css";
import { BookModel } from "../../../models/data-model";
import { productService } from "../../../services/data-service";
import { notify } from "../../../utils/notify";
import { Bookcard } from "../bookcard/bookcard";

export function Booklist() {

    const [books, setBooks] = useState<BookModel[]>([]);

    useEffect(()=>{

        productService.getAllBooks()
        .then(books=> setBooks(books))
        .catch(err=> notify.error(err.message));



    },[])

    async function deleteMe(id: number) {
        try {
            await productService.deleteBook(id);
            setBooks(books.filter(b => b.id !== id));
            notify.success("Book has been deleted.");
        }
        catch (err) {
            notify.error(err);
        }
    }

    return (
        <div className="Booklist">

        {books.map(b=> <Bookcard key={b.id} book={b} onDelete={deleteMe} />)}

        </div>
    );
}
