export class Boombox {
    id;
    color;
    volume;
    constructor(id, color, volume) {
        this.id = id;
        this.color = color;
        this.volume = volume;
    }
    display() {
        for (const key in this) {
            const value = this[key];
            if (typeof value !== "function") {
                document.body.innerHTML += `${key} : ${value} <br>`;
            }
        }
    }
    turnOn() {
        document.body.innerHTML += `You have turned on boomBox ${this.id} <br>`;
    }
    turnOf() {
        document.body.innerHTML += `You have turned off boomBox ${this.id} <hr>`;
    }
}
