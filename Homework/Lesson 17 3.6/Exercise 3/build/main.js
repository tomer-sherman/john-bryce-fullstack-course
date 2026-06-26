import { Flashlight } from "./flashlight.js";
const firstFlashlight = new Flashlight(1, "White", 3, 3, 3);
firstFlashlight.display();
firstFlashlight.turnOn();
firstFlashlight.turnOf();
firstFlashlight.changeBattery();
//----- now i will try too activate all the funcs within the flashlight
const secondFlashlight = new Flashlight(2, "Red", 4, 4, 4);
secondFlashlight.activateAll();
