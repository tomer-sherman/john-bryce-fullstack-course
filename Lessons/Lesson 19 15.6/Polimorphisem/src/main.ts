import { Clothing } from "./clothing.js";
import { Pants } from "./pants.js";
import { Shirt } from "./shirt.js";
import { Shoes } from "./shoes.js";

// Polynirohism -
// The ability too create a reference, from the base type, and create a sub object.


const choice = +prompt("Enter desired clothing(1 = shirt, 2 = pants, 3 = shoes)")!;

let myClothing: Clothing;
// Like a shape shifter.
switch (choice) {
    case 1: myClothing = new Shirt("Zara", 30, 5);
        console.log(myClothing);
        break;
    case 2: myClothing = new Pants("Fox", 35, 80);
        console.log(myClothing);
        break;
    case 3: myClothing = new Shoes("Adidas", 32, true);
        console.log(myClothing);
        break;
    default: throw new Error("Enter only 1,2,3")
}

myClothing.display();

// Compiler always looks at the reference key, Before any shapes have been set.
// instanceof checks wether the general Clothing inherited the Shirt class.
if (myClothing instanceof Shirt) {
    //document.body.innerHTML += `Total buttons: ${(myClothing as Shirt).buttons}<br>` // Since the ide is smart then, you don't have too write this line this way.
    document.body.innerHTML += `Total buttons: ${myClothing.buttons}<br>`

}

document.body.innerHTML += `Calculated Price: ${myClothing.calculatePrice()};`

// SO THATS WHY YOU USE ABSTRACT FUNCTIONS!!!!
// It solves polimorphisem in the main script.
// Polimorphisem is created, in the main script, Thus when writing the main class 
// You always need too keep in mind that the coder in the main script can make Polimorphizem.
// He can make myClothing in this case become a ShapeShifter!! 

// Another form of polimorphisem.
const c1 = new Shirt("Castro",40,10);
const c2 = new Pants("Zara",45,90);
const c3 = new Shoes("Nike",42,true);

const allClothing: Clothing[] = [];
allClothing.push(c1);
allClothing.push(c2);
allClothing.push(c3);
allClothing.push(new Pants("Zarush",3,3)); // The reference is the array index in this case allClothing[3];

for(const c of allClothing){
    c.display();
    document.body.innerHTML+= "<br>";
}
















// a code part without polimorphizem.
// switch (choice) {
//     case 1: const myShirt = new Shirt("Zara", 30, 5);
//         myShirt.display();
//         // Action 1
//         // Action 2
//         // Action 3
//         break;

//     case 2: const myPants = new Pants("Fox", 35, 80);
//         myPants.display();
//         // Action 1
//         // Action 2
//         // Action 3
//         break;

//     case 3: const myShoes = new Shoes("Adidas", 32, true);
//         myShoes.display();
//         // Action 1
//         // Action 2
//         // Action 3
//         break;

// }

