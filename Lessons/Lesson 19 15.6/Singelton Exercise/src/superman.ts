export class Superman{
    public power = "Can fly";
    public readonly birthDate = "Jan 1st 1980";

    // Our one and only object. One way too make single ton.
    public static readonly instance = new Superman();

    private constructor(){};


    public display():void{
        document.body.innerHTML += ` Power: ${this.power}<br>`
        document.body.innerHTML += ` Birth day: ${this.birthDate}<br>`
    }
    



}