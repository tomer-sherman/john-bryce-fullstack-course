import { Piano } from "./piano.js";

export class GrandPiano extends Piano {

    size: number;

    constructor(module: string, manufacture: string, color: string, pianoKeysNum: number
        , size: number
    ) {
        super(module, manufacture, color, pianoKeysNum);
        this.size = size;

    }

    public makeSound(): void {
        document.body.innerHTML += `SHLOOOOOOOOOOONGGGGGGGGGGGGGGGGGG I AM A GRAND PIANO!!`
    }
}