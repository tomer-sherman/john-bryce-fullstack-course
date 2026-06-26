export class ObjectCounter {
    // Set this counter prop as static.
    static counter = 0;
    constructor() {
        ObjectCounter.counter++;
        console.log(ObjectCounter.counter);
        if (ObjectCounter.counter > 1) {
            throw new Error(`You cannot create 2 or above Objects.`);
        }
    }
}
