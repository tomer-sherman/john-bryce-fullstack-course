import { MusicInstrument } from "./music-instrument.js";

export class Drum extends MusicInstrument {

    diameter: number;

    constructor(module: string, manufacture: string, color: string, diameter: number) {
        super(module, manufacture, color);
        this.diameter = diameter;
    }

   
    public makeSound(): void {
        document.body.innerHTML += `BONG BONG BON I AM A DRUM!@!!@!`
    }
}