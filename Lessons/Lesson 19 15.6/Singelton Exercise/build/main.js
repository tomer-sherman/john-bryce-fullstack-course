import { ObjectCounter } from "./broken-singleton.js";
try {
    const object1 = new ObjectCounter(1);
}
catch (err) {
    if (err instanceof Error) {
        alert("Cannot add 2 objects or above using this class.");
    }
}
// In the above is the broken way, it will work, kinda but not optimaly.
import { Superman } from "./superman.js";
const s1 = new Superman();
s1.display();
