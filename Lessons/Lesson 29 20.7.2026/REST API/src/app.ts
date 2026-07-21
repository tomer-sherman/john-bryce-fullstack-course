import express, { Request, Response } from "express";
import { books } from "./books";

// Create our server object.
const server = express();

// Configure express to create response.body from given JSON:
server.use(express.json());

// This func monitors on GET requests on route "/api/books"
server.get("/api/books", (request: Request, response: Response) => {
    console.log("test...");
    response.json(books);

});

// Get one book
server.get("/api/books/:id", (request: Request, response: Response) => {
    const id = +request.params.id;
    const book = books.find(b => b.id === id);
    response.json(book);

});

// Will not work, Cause you have a get request already. in the upper section.
server.post("/api/books", (request: Request, response: Response) => {

    const book = request.body;
    book.id = books[books.length - 1].id + 1; // Demo for getting some higher new id.
    books.push(book);
    response.status(201).json(book);

});


// Update
server.put("/api/books/:id", (request: Request, response: Response) => {

    const id = +request.params.id;
    const book = request.body;
    book.id = id;

    const index = books.findIndex(b => b.id === id);
    books[index] = book; // overides the book in the in the DB with the new book.
    response.json(book);

});

//Delete 
server.delete("/api/books/:id", (request: Request, response: Response) => {
    const id = +request.params.id;
    const index = books.findIndex(b => b.id === id);
    books.splice(index, 1);
    response.status(204).json();
   
});




server.listen(4000, () => { console.log("Listening....") });

// :-)xDxD

