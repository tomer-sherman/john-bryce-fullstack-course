
// You export a class, Then import it in the main script
export class Book {

    bookName: string;
    author: string;
    expense: number;
    price: number;

// This is the BOOK members, i forgot the second name

    constructor(bookName: string, author: string, expense: number, price: number) {
// This is the constructor, it's job is too give a definetion for the members,
        this.bookName = bookName;
        this.author = author;
        this.expense = expense;
        this.price = price;
    }

    // A display method
    display() {
        for (const key in this) {
            // I define the value of the member as a value variable
            const value = this[key];

            // An extra layer of protection. for future coders. // If value is not a function do this {this}
            if (typeof value !== "function") {
                // simply prints out all the members, and their values;
                document.body.innerHTML += `${key}: ${value} <br>`
            }
        }
    }

    // A vat calculator calcs Vat of a price and The price before the Vat 
    // Returns both
    calcVat() {

        const vat = 0.17 * this.price;
        const priceBefore = this.price - vat;

        return {
            vat: vat,
            priceBeforeVat: priceBefore
        }
    }

    // Simply displays a price 
    // before and after vat
    displayVat() {


        document.body.innerHTML += `Book before vat: ${this.calcVat().priceBeforeVat.toFixed(2)} + VAT: ${this.calcVat().vat.toFixed(2)} = ${this.price} <hr> `


    }



}




