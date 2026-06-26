export class ObjectCounter {

    // Set this counter prop as static.
    private static counter : number = 0;


    public prop : number;
    
    constructor(prop: number){

        this.prop = prop;


       if(ObjectCounter.counter >= 2){
        this = null;
       }
       ObjectCounter.counter++
    }


}