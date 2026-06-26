import { Shape } from "./shape.js";
export class Rectangle extends Shape {
    lengthSize;
    heightSize;
    constructor(posX, posY, color, lengthSize, heightSize) {
        super(posX, posY, color);
        this.heightSize = heightSize;
        this.lengthSize = lengthSize;
    }
    display() {
        super.display();
    }
    displayCalcs() {
        document.body.innerHTML += ` The area is ${this.getArea().toFixed(2)}<br>`;
        document.body.innerHTML += ` The perimeter is ${this.getPerimeter().toFixed(2)}<br>`;
        document.body.innerHTML += "<hr>";
    }
    getArea() {
        return this.lengthSize * this.heightSize;
    }
    getPerimeter() {
        return this.lengthSize * 2 + this.heightSize * 2;
    }
}
