export class Book {
    bookName;
    author;
    expense;
    price;
    constructor(bookName, author, expense, price) {
        this.bookName = bookName;
        this.author = author;
        this.expense = expense;
        this.price = price;
    }
    display() {
        for (const key in this) {
            const value = this[key];
            // An extra layer of protection. for future coders.
            if (typeof value !== "function") {
                document.body.innerHTML += `${key}: ${value} <br>`;
            }
        }
    }
    calcVat() {
        const vat = 0.17 * this.price;
        const priceBefore = this.price - vat;
        return {
            vat: vat,
            priceBeforeVat: priceBefore
        };
    }
    displayVat() {
        document.body.innerHTML += `Book before vat: ${this.calcVat().priceBeforeVat.toFixed(2)} + VAT: ${this.calcVat().vat.toFixed(2)} = ${this.price} <hr> `;
    }
}
