import { MusicInstrument } from "./music-instrument.js";

export class Guitar extends MusicInstrument{

    stringNum: number;

    constructor(module: string, manufacture: string, color: string, stringNum: number){
        super(module,manufacture,color);
        this.stringNum = stringNum;
    }

    public makeSound(): void {
        document.body.innerHTML += `Bwounga Shwang Shawarma I am a guitar`
    }
}
