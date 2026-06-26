export class ObjectCounter {

    
    private static counter : number = 0;
    public prop : number;
    
    constructor(prop: number){
        this.prop = prop;
       if(ObjectCounter.counter >= 2){
        throw new Error(`Cannot add 2 or above, objects`)
       }

       ObjectCounter.counter++;

    }


}