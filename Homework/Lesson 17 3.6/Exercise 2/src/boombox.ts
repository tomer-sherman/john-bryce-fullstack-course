export class Boombox {

    id: number;
    color: string;
    volume: number;

    constructor(id: number, color: string, volume: number) {
        this.id = id;
        this.color = color;
        this.volume = volume;
    }

    display() {

        for (const key in this) {
            const value = this[key];

            if (typeof value !== "function") {
                document.body.innerHTML += `${key} : ${value} <br>`
            }

        }

    }

    turnOn(){

        document.body.innerHTML += `You have turned on boomBox ${this.id} <br>`

    }

    turnOf(){
        document.body.innerHTML += `You have turned off boomBox ${this.id} <hr>`
    }

}