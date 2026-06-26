import { Shape } from "./shape.js";

export class Square extends Shape {

    sideSize: number;

    constructor(posX: number, posY: number, color: string, sideSize: number) {
        super(posX, posY, color);

        this.sideSize = sideSize;
    }

    display() {
        super.display();
    }

    getArea(): number {
        return this.sideSize ** 2;
    }

    getPerimeter(): number {
        return this.sideSize * 4;
    }

    displayCalcs(): void {
        document.body.innerHTML += ` The area is ${this.getArea().toFixed(2)}<br>`;
        document.body.innerHTML += ` The perimeter is ${this.getPerimeter().toFixed(2)}<br>`;
         document.body.innerHTML+="<hr>";
    }
}