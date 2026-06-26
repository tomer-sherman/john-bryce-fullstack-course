import { Shape } from "./shape.js";
export class Circle extends Shape {
    radius;
    diameter;
    constructor(posX, posY, color, radius) {
        super(posX, posY, color);
        this.radius = radius;
        this.diameter = this.radius * 2;
    }
    display() {
        super.display();
    }
    getArea() {
        return Math.PI * (this.radius ** 2);
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    displayCalcs() {
        document.body.innerHTML += `The diameter is: ${this.radius * 2}<br>`;
        document.body.innerHTML += ` The area is ${this.getArea().toFixed(2)}<br>`;
        document.body.innerHTML += ` The perimeter is ${this.getPerimeter().toFixed(2)}<br>`;
        document.body.innerHTML += "<hr>";
    }
}
