import { Shape } from "./shape.js";

export class Circle extends Shape {

    readonly radius: number;
    readonly diameter: number;

    constructor(posX: number, posY: number, color: string, radius: number) {
        super(posX, posY, color);
        this.radius = radius;
        this.diameter = this.radius*2;
    }
    display() {
        super.display();
    }

    getArea(): number {
        return Math.PI * (this.radius ** 2);
    }
    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
    displayCalcs(): void {
        document.body.innerHTML+=`The diameter is: ${this.radius*2}<br>`;
        document.body.innerHTML += ` The area is ${this.getArea().toFixed(2)}<br>`;
        document.body.innerHTML += ` The perimeter is ${this.getPerimeter().toFixed(2)}<br>`;
        document.body.innerHTML+="<hr>";
    }
}