import { Book } from "./book.js"; // Dont forger too add .Js cause its not automatic
let firstBook = new Book("The Life of Moishe", "Moishe Unfik", 69, 40);
firstBook.display();
firstBook.displayVat();
let secondBook = new Book("Amos", "Gaming", 70, 69);
secondBook.display();
secondBook.displayVat();
