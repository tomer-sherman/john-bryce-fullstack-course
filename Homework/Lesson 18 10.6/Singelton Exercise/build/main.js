import { ObjectCounter } from "./objectCounter.js";
try {
    const object = new ObjectCounter();
    const object2 = new ObjectCounter();
}
catch (err) {
    if (err instanceof Error) {
        setTimeout(() => {
            alert(err.message);
        }, 0);
        const object = new ObjectCounter();
        console.log(object);
    }
}
