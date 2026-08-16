import axios from "axios";
import { BookModel, GenreModel } from "../models/data-model";
import { appConfig } from "../utils/app-config";

class ProductService {

    public async getAllBooks(): Promise<BookModel[]> {
        const response = await axios.get<BookModel[]>(appConfig.getAllBooksUrl);
        const books = response.data;
        return books;
    }

    public async getAllGenres(): Promise<GenreModel[]> {
        const response = await axios.get<GenreModel[]>(appConfig.getAllGenresUrl);
        const genres = response.data;

        return genres;
    }

    public async addBook(book: BookModel): Promise<BookModel> {
        const response = await axios.post<BookModel>(appConfig.addBookUrl, book);
        const dbBook = response.data;

        return dbBook;
    }

    public async deleteBook(id: number): Promise<void>{

        await axios.delete(appConfig.deleteBookUrl + id);

    }


}

export const productService = new ProductService();
