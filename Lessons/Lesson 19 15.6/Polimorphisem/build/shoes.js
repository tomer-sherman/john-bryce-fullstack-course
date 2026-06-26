import { Clothing } from "./clothing.js";
export class Shoes extends Clothing {
    isShoelaces;
    constructor(brand, size, isShoelaces) {
        super(brand, size);
        this.isShoelaces = isShoelaces;
    }
    display() {
        super.display();
        document.body.innerHTML += `Buttons: ${this.isShoelaces} <br>`;
    }
    calculatePrice() {
        return this.size + 10;
    }
}
