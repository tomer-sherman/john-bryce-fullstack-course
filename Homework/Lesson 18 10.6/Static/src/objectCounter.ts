export class ObjectCounter {

    // Set this counter prop as static.
    public static counter : number = 0;

    // This func is called when an object is created by the class
    constructor(){
        // Every time an object is constructed i add 1 too the counter.
        // And i console.log too see if all of this works
        ObjectCounter.counter++;
        console.log(ObjectCounter.counter);
    }


}