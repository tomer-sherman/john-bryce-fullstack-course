import { Clothing } from "./clothing.js";

export class Shirt extends Clothing {

    public buttons : number;

     constructor(brand: string, size: number,buttons: number){
        super(brand,size);
        this.buttons = buttons;
    }


    public display(){
        super.display();
        document.body.innerHTML+=`Buttons: ${this.buttons} <br>`
    }

    public calculatePrice(): number {
        return this.size + this.buttons;
    }



}