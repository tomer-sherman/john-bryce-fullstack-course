// Class that holds a object that contains data
// Function in this OOP coding system , functions are called methods.
export class Car {

    // Data Members // Fields the object Fields
    manufacturer: string;
    model: string;
    volume: number //= ""; Because the constructor method gives these fields a value,
    color: string //= ""; There is no need too add these code.
    year: number //= 0;



    // The hidden constructor hidden - method
    constructor(manufacturer: string, model: string, volume: number, color: string, year: number) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.volume = volume;
        this.color = color;
        this.year = year;
    }

    // Can contain methods.
    display(): void {
        document.body.innerHTML += `Brand: ${this.manufacturer} <br>`;
        document.body.innerHTML += `Brand: ${this.model} <br>`;
        document.body.innerHTML += `Brand: ${this.color} <br>`;
        document.body.innerHTML += `Color: ${this.color} <br>`;
        document.body.innerHTML += `Brand: ${this.year} <hr>`;
    }

    // this method, initializes the car values. the coder wants too place. useally the constructor does that.


}