
export abstract class Shape {

    public posX: number;
    public posY: number;
    public readonly color: string;

    public constructor(posX: number, posY: number, color: string) {
        this.posX = posX;
        this.posY = posY;
        this.color = color;
    }

    display(): void {
        for (const prop in this) {
            const value = this[prop];
            if (typeof value !== "function") {
                document.body.innerHTML += `${prop}: ${value}<br>`;
            };
        };
         this.displayCalcs();
    }


    abstract displayCalcs(): void;
    

    abstract getArea(): number;
    abstract getPerimeter(): number;
}