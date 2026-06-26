import { MusicInstrument } from "./music-instrument.js";
export class Piano extends MusicInstrument {
    pianoKeysNum;
    constructor(module, manufacture, color, pianoKeysNum) {
        super(module, manufacture, color);
        this.pianoKeysNum = pianoKeysNum;
    }
    makeSound() {
        document.body.innerHTML += `PING DONG SHMING ARIEL SHLONG I AM A PIANO!!!!@!#!@#`;
    }
}
