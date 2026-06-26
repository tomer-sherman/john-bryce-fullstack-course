// Imported car in order too extend it.
import { Car } from "./car.js";
// Created a new RaceCar that inherites the Car class props and methods.
export class RaceCar extends Car {
    maxVelocity;
    raceNum;
    constructor(licensePlate, manufacture, module, color, engineSize, maxVelocity, raceNum) {
        super(licensePlate, manufacture, module, color, engineSize);
        this.maxVelocity = maxVelocity;
        this.raceNum = raceNum;
    }
}
