export class MusicInstrument {
    module;
    manufacture;
    color;
    constructor(module, manufacture, color) {
        this.module = module;
        this.manufacture = manufacture;
        this.color = color;
    }
    display() {
        for (const prop in this) {
            const value = this[prop];
            if (typeof value !== "function") {
                document.body.innerHTML += `${prop}: ${value} <br>`;
            }
        }
    }
}
