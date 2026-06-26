export class Shape {
    posX;
    posY;
    color;
    constructor(posX, posY, color) {
        this.posX = posX;
        this.posY = posY;
        this.color = color;
    }
    display() {
        for (const prop in this) {
            const value = this[prop];
            if (typeof value !== "function") {
                document.body.innerHTML += `${prop}: ${value}<br>`;
            }
            ;
        }
        ;
        this.displayCalcs();
    }
}
