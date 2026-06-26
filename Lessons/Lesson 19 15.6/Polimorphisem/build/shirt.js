import { Clothing } from "./clothing.js";
export class Shirt extends Clothing {
    buttons;
    constructor(brand, size, buttons) {
        super(brand, size);
        this.buttons = buttons;
    }
    display() {
        super.display();
        document.body.innerHTML += `Buttons: ${this.buttons} <br>`;
    }
    calculatePrice() {
        return this.size + this.buttons;
    }
}
