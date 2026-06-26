// You import the class in the main script
import { Book } from "./book.js"; // Dont forger too add .Js cause its not automatic

// A var that its name is firstBook and gave it the Book class atribute
                            // All the members Values / arguments
let firstBook = new Book("The Life of Moishe","Moishe Unfik", 69, 40);
// simply displays the Book and displays vats using the methods of this class
firstBook.display();
firstBook.displayVat();

// The same as before
let secondBook = new Book("Amos","Gaming",70,69);
secondBook.display();
secondBook.displayVat();