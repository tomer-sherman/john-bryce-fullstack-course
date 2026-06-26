import { MusicInstrument } from "./music-instrument.js";
export class Guitar extends MusicInstrument {
    stringNum;
    constructor(module, manufacture, color, stringNum) {
        super(module, manufacture, color);
        this.stringNum = stringNum;
    }
    makeSound() {
        document.body.innerHTML += `Bwounga Shwang Shawarma I am a guitar`;
    }
}
