export abstract class Clothing {

    public brand: string;
    public size: number;


    constructor(brand: string, size: number) {
        this.brand = brand;
        this.size = size;
    }


    public display() {
        document.body.innerHTML += `Brand : ${this.brand}<br> `
        document.body.innerHTML += `Size : ${this.size}<br> `
    }

    public abstract calculatePrice(): number;


}