export class Car {
    licensePlate;
    manufacture;
    module;
    color;
    engineSize;
    constructor(licensePlate, manufacture, module, color, engineSize) {
        this.licensePlate = licensePlate;
        this.manufacture = manufacture;
        this.module = module;
        this.color = color;
        this.engineSize = engineSize;
    }
    display() {
        for (const prop in this) {
            const value = this[prop];
            if (typeof prop !== "function") {
                document.body.innerHTML += `${prop} : ${value} <br>`;
            }
        }
    }
}
