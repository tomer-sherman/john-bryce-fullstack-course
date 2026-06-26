import { Car } from "./car.js";
import { RaceCar } from "./race-car.js";
const firstCar = new Car(2424, "BMW", "GT300", "red", 5000);
firstCar.display();
document.body.innerHTML += `<hr>`;
const fastCar = new RaceCar(6969, "FERARI", "DUBAI", "Black", 8000, 230, 3);
fastCar.display();
