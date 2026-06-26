import { Clothing } from "./clothing.js";

export class Shoes extends Clothing {

    public isShoelaces: boolean;

     constructor(brand: string, size: number, isShoelaces: boolean){
        super(brand,size);
        this.isShoelaces = isShoelaces;
    }


    public display(){
        super.display();
        document.body.innerHTML+=`Buttons: ${this.isShoelaces} <br>`
    }

     public calculatePrice(): number {
        return this.size + 10;
    }



}