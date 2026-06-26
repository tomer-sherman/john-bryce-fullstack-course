// In order too connect the Car class you need too export the class
// And in order too get the Car you write Import
// You have too go too the html and write type = "module" inside the script line.
import { Car } from "./car.js";
const kitten = { name: "Mitsi", age: 4 }; // A literal OBJECT
//document.write(firstCar); // will not work since it will put objectOBJECT
let firstCar = new Car("Suzuki", "X45", 4500, "Yellow", 2025); // This is a class orianted object
firstCar.display();
let secondCar = new Car("Toyota", "MS65", 7500, "Yellow", 2014);
secondCar.display();
//secondCar.maxSpeed = 3000kh; will not work, since in the class there is no maxSpeed
