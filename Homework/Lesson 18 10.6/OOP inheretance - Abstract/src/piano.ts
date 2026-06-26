import { MusicInstrument } from "./music-instrument.js";

export class Piano extends MusicInstrument {

    pianoKeysNum: number;

    constructor(module: string, manufacture: string, color: string, pianoKeysNum: number) {
        super(module, manufacture, color);
        this.pianoKeysNum = pianoKeysNum;
    }

   
    public makeSound(): void {
        document.body.innerHTML += `PING DONG SHMING ARIEL SHLONG I AM A PIANO!!!!@!#!@#`
    }
}