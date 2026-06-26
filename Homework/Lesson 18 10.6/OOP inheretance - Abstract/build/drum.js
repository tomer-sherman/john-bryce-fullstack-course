import { MusicInstrument } from "./music-instrument.js";
export class Drum extends MusicInstrument {
    diameter;
    constructor(module, manufacture, color, diameter) {
        super(module, manufacture, color);
        this.diameter = diameter;
    }
    makeSound() {
        document.body.innerHTML += `BONG BONG BON I AM A DRUM!@!!@!`;
    }
}
