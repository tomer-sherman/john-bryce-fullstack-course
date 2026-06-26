import { Shape } from "./shape.js";
export class Square extends Shape {
    sideSize;
    constructor(posX, posY, color, sideSize) {
        super(posX, posY, color);
        this.sideSize = sideSize;
    }
    display() {
        super.display();
    }
    getArea() {
        return this.sideSize ** 2;
    }
    getPerimeter() {
        return this.sideSize * 4;
    }
    displayCalcs() {
        document.body.innerHTML += ` The area is ${this.getArea().toFixed(2)}<br>`;
        document.body.innerHTML += ` The perimeter is ${this.getPerimeter().toFixed(2)}<br>`;
        document.body.innerHTML += "<hr>";
    }
}
