
import { OkPacketParams } from "mysql2";
import { BookModel } from "../models/data-model";
import { GenreModel } from "../models/genres-model";
import { dal } from "../utils/dal";
import { ClientError } from "../models/client-error";
import { StatusCode } from "../models/enums";

// Logic:
class DataService {

    // Get all products:
    public async getAllBooks(): Promise<BookModel[]> {
        const sql = `SELECT books.*, genres.name AS genreName
                FROM books
                JOIN genres ON genres.id = books.genre;`


        const books = await dal.execute(sql) as BookModel[];

        return books;
    }

    public async getAllGenres(): Promise<GenreModel[]> {

        const sql = `select * from genres`;

        const genres = await dal.execute(sql) as GenreModel[];

        return genres;

    }

    public async getOneBook(id: number): Promise<BookModel> {

        const sql = `select * from books where id = ?`;
        const values = [id];

        const bookArr = await dal.execute(sql, values) as BookModel[];
        if (bookArr.length === 0) throw new ClientError(StatusCode.NotFound, "The book you are trying to find does not exist!");
        const book = bookArr[0];



        return book;

    }


    public async addBook(book: BookModel): Promise<BookModel> {

        book.validate();

        const sql = `insert into books (name,summary,genre,price,stock) values (?,?,?,?,?);`
        const values = [book.name, book.summary, book.genre, book.price, book.stock];
        const info = await dal.execute(sql, values) as OkPacketParams;
        const dbBook = await this.getOneBook(info.insertId!);
        return dbBook;
    }

    public async deleteBook(id: number): Promise<void> {

        const sql = `delete from books where id = ?`;
        const values = [id];

        const info = await dal.execute(sql, values) as OkPacketParams;
        
        if(!info) throw new ClientError(StatusCode.NotFound, "The book you are trying too delete does not exist!");

    }



}

export const dataService = new DataService();
