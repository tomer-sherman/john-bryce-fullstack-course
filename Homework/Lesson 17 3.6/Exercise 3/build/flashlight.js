export class Flashlight {
    id;
    color;
    length;
    lightVolume;
    batteryNum;
    constructor(id, color, length, lightVolume, batteryNum) {
        this.id = id;
        this.color = color;
        this.length = length;
        this.lightVolume = lightVolume;
        this.batteryNum = batteryNum;
    }
    display = () => {
        for (const key in this) {
            const value = this[key];
            if (typeof value !== "function") {
                document.body.innerHTML += `${key} : ${value} <br>`;
            }
        }
    };
    turnOn = () => {
        document.body.innerHTML += `You have turned on flashlight number ${this.id} <br>`;
    };
    turnOf = () => {
        document.body.innerHTML += `You have turned off flashlight number ${this.id} <br>`;
    };
    changeBattery = () => {
        document.body.innerHTML += `You have changed batteries too flashlight number ${this.id} <hr>`;
    };
    activateAll() {
        for (const key in this) {
            // The bouncer is still here! You must assert 'keyof this'
            const validKey = key;
            const currentItem = this[validKey];
            if (typeof currentItem === "function") {
                const action = currentItem;
                action();
            }
        }
    }
}
