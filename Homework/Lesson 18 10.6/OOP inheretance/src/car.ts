export class Car {
    // Simply a car class, that has all the props below, some readonly some only public.
    // since you cannot change licensePlate manufacture module and engineSize but color you could,
    // If it were a game.
    public readonly licensePlate: number;
    public readonly manufacture: string;
    public readonly module: string;
    public color: string;
    public readonly engineSize: number;

    // Simple ctor.
    constructor(licensePlate: number, manufacture: string, module: string, color: string, engineSize: number) {

        this.licensePlate = licensePlate;
        this.manufacture = manufacture;
        this.module = module;
        this.color = color;
        this.engineSize = engineSize;
    }

    // A function that displays all the props and the values they have.
    // With a defence layer on top.
    display():void{
        for(const prop in this){
            const value = this[prop];

            if(typeof value !== "function"){
            document.body.innerHTML+= `${prop} : ${value} <br>`}

        }
    }

}