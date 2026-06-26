
// Imported car in order too extend it.
import { Car } from "./car.js";

// Created a new RaceCar that inherites the Car class props and methods.
export class RaceCar extends Car {

    // Added 2 extra properties
    maxVelocity: number;
    raceNum: number;

    // The ctor with all the props from the Super Class, and extra 2 props.
    constructor(licensePlate: number, manufacture: string, module: string, color: string, engineSize: number,
        maxVelocity: number, raceNum: number) {

        super(licensePlate, manufacture, module, color, engineSize);
        this.maxVelocity = maxVelocity;
        this.raceNum = raceNum;

    }


    // A display func, that activates the Super Class Method display, 
    // I wonder, maybe i will touch it later, this code right now is useless since it inherites the display func. it just seems too take extra cpu power,
    // However there is an upside, it gives the coder a cleaner understanding of how this Class works.
display(): void {
    super.display();
}



}