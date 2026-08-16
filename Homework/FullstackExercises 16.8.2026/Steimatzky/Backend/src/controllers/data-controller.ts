import express, { Request, Response, Router } from "express";
import { dataService } from "../services/data-service";
import { BookModel } from "../models/data-model";
import { StatusCode } from "../models/enums";

// Contains routes, without logic.
class DataController {

    // Create a router object which can listen on routes:
    public router: Router = express.Router();

    // Constructor - register routes:
    public constructor() {
        this.router.get("/api/books", this.getAllBooks);
        this.router.post("/api/books", this.addBook);
        this.router.get("/api/genres", this.getAllGenres);
        this.router.get("/api/books/:id", this.getOneBook);
        this.router.delete("/api/books/:id", this.deleteBook);
    }

    // Get : 
    private async getAllBooks(request: Request, response: Response): Promise<void> {
        const data = await dataService.getAllBooks();
        response.json(data);
    }

    private async getAllGenres(request: Request, response: Response): Promise<void> {

        const genres = await dataService.getAllGenres();

        response.json(genres);

    }

    private async getOneBook(request: Request, response: Response): Promise<void> {

        const book = await dataService.getOneBook(+request.params.id);

        response.json(book);


    }

    private async addBook(request: Request, response: Response): Promise<void> {

        const book = new BookModel(request.body);

        const dbBook = await dataService.addBook(book);

        response.json(dbBook).status(StatusCode.Created);


    }

    public async deleteBook(request: Request, response: Response): Promise<void> {

        const id = +request.params.id;

        await dataService.deleteBook(id);

        response.status(StatusCode.NoContent).json();

    }

}

export const dataController = new DataController();
