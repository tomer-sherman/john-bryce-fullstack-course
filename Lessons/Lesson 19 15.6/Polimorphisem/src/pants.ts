import { Clothing } from "./clothing.js";

export class Pants extends Clothing {

    public length: number;

    constructor(brand: string, size: number, length: number) {
        super(brand, size);
        this.length = length;
    }


    public display() {
        super.display();
        document.body.innerHTML += `Buttons: ${this.length} <br>`
    }

    public calculatePrice(): number {
        return this.size + this.length;
    }


}