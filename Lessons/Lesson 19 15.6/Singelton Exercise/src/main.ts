import { ObjectCounter } from "./broken-singleton.js";
import { sun } from "./sun.js";

try {
    const object1 = new ObjectCounter(1);
} catch (err) {
    if (err instanceof Error) {
        alert("Cannot add 2 objects or above using this class.");

    }

}
// The classic way of making a singleton
import { Superman } from "./superman.js";
Superman.instance.display();
//const s1 = new Superman(); // Will not work since you constructor is privet.

// The second way too make singleton
sun.display();
// Will not work. since it wasn't imported here.
//const secondSun = new Sun();