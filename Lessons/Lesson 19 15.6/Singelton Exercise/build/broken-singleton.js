export class ObjectCounter {
    static counter = 0;
    prop;
    constructor(prop) {
        this.prop = prop;
        if (ObjectCounter.counter >= 2) {
            throw new Error(`Cannot add 2 or above, objects`);
        }
        ObjectCounter.counter++;
    }
}
