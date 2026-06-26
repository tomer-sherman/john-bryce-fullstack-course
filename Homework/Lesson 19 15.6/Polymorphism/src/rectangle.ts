import { Shape } from "./shape.js";

export class Rectangle extends Shape {

    lengthSize: number;
    heightSize: number;

    constructor(posX: number, posY: number, color: string, lengthSize: number, heightSize: number) {
        super(posX, posY, color);
        this.heightSize = heightSize;
        this.lengthSize = lengthSize;
    }

    display() {
        super.display();
    }



    displayCalcs(): void {
        document.body.innerHTML += ` The area is ${this.getArea().toFixed(2)}<br>`;
        document.body.innerHTML += ` The perimeter is ${this.getPerimeter().toFixed(2)}<br>`;
        document.body.innerHTML += "<hr>";
    }

    getArea(): number {
        return this.lengthSize * this.heightSize;
    }

    getPerimeter(): number {
        return this.lengthSize * 2 + this.heightSize * 2;
    }
}