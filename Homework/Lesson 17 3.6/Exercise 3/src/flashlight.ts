export class Flashlight {

    id: number;
    color: string;
    length: number;
    lightVolume: number;
    batteryNum: number;

    constructor(id: number, color: string, length: number, lightVolume: number, batteryNum: number) {
        this.id = id;
        this.color = color;
        this.length = length;
        this.lightVolume = lightVolume;
        this.batteryNum = batteryNum;
    }
// Intantionaly putting all the methods as Properties, in order too Activate all the methods in a single method
    display = () => {
        for (const key in this) {
            const value = this[key];

            if(typeof value !=="function"){
            document.body.innerHTML += `${key} : ${value} <br>`
            }


        }
    }
// Simply write text
    turnOn= () => {
        document.body.innerHTML += `You have turned on flashlight number ${this.id} <br>`

    }
// Same
    turnOf =() => {
        document.body.innerHTML += `You have turned off flashlight number ${this.id} <br>`
    }
// Same
    changeBattery =()=> {
        document.body.innerHTML += `You have changed batteries too flashlight number ${this.id} <hr>`
    }
// A function that activates all the Properties of the Specific Variable you gave it the class. only if they are functions/ methods.
    activateAll() {
        for (const key in this) {

            // The bouncer is still here! You must assert 'keyof this'
            const validKey = key as keyof this;
            const currentItem = this[validKey];
            // IF property is a function activate it.
            if (typeof currentItem === "function") {
                const action = currentItem as Function;
                action();
            }
        }
    }

    // The use of those arrow functions here is Crucial, without using Those properties as methods, 
    // Essetially the loop inside Activate all wouldn't be able too find all those methods. Since they would have been hidden inside the class.

    // Another intersting fact i have realized just now, i am not sure but it seems that i have intentionally Made the method activateAll too be without a Property,
    // In order too not cause an infinite loop. cause it would activate it self again and again.



}