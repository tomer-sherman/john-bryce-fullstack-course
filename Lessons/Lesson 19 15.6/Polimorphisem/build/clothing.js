export class Clothing {
    brand;
    size;
    constructor(brand, size) {
        this.brand = brand;
        this.size = size;
    }
    display() {
        document.body.innerHTML += `Brand : ${this.brand}<br> `;
        document.body.innerHTML += `Size : ${this.size}<br> `;
    }
}
