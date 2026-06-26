import { Clothing } from "./clothing.js";
export class Pants extends Clothing {
    length;
    constructor(brand, size, length) {
        super(brand, size);
        this.length = length;
    }
    display() {
        super.display();
        document.body.innerHTML += `Buttons: ${this.length} <br>`;
    }
    calculatePrice() {
        return this.size + this.length;
    }
}
