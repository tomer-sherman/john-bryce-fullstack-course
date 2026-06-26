export abstract class MusicInstrument {

    public readonly module: string;
    public readonly manufacture: string;
    public color: string;

    constructor(module: string, manufacture: string, color: string) {
        this.module = module;
        this.manufacture = manufacture;
        this.color = color;
    }

    public display(): void {
        for (const prop in this) {
            const value = this[prop];

            if (typeof value !== "function") {
                document.body.innerHTML += `${prop}: ${value} <br>`
            }
        }
    }
    public abstract makeSound(): void; // Makes sounds

}