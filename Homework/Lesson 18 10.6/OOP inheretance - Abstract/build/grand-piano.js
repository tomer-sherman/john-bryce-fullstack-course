import { Piano } from "./piano.js";
export class GrandPiano extends Piano {
    size;
    constructor(module, manufacture, color, pianoKeysNum, size) {
        super(module, manufacture, color, pianoKeysNum);
        this.size = size;
    }
    makeSound() {
        document.body.innerHTML += `SHLOOOOOOOOOOONGGGGGGGGGGGGGGGGGG I AM A GRAND PIANO!!`;
    }
}
