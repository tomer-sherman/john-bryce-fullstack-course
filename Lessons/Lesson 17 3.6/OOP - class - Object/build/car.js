// Class that holds a object that contains data
// Function in this OOP coding system , functions are called methods.
export class Car {
    // Data Members // Fields the object Fields
    manufacturer;
    model;
    volume; //= ""; Because the constructor method gives these fields a value,
    color; //= ""; There is no need too add these code.
    year; //= 0;
    // The hidden constructor hidden - method
    constructor(manufacturer, model, volume, color, year) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.volume = volume;
        this.color = color;
        this.year = year;
    }
    // Can contain methods.
    display() {
        document.body.innerHTML += `Brand: ${this.manufacturer} <br>`;
        document.body.innerHTML += `Brand: ${this.model} <br>`;
        document.body.innerHTML += `Brand: ${this.color} <br>`;
        document.body.innerHTML += `Color: ${this.color} <br>`;
        document.body.innerHTML += `Brand: ${this.year} <hr>`;
    }
}
