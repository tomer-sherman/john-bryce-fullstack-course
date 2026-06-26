// Reference type.
// This type always consists of an object, // but it has a pointer a reference, In this case below a variable named k1
// the world new creates an object, and gives the reference too the variable!!.
// Thus the variable holds the reference. // String is used in this way, as well, string is considered like an object.

// This doesn't really change the value of "COOL" it is still in the memory,
// It just creates a new object called "amos"; and changes the reference, BOTH OF THOSE STRINGS ARE FLOATING IN THE MEMORY.
// Thats why there is a GARBAGE COLLECTOR IN EVERY BIG SYSTEM. that works if the memory is overflown.
let a = "Cool";
a = "amos";

import { Kitten } from "./kittens.js";

const k1 = new Kitten("Mitsi", 4); // Creates an object and adds, the reference too the variable!!.
const k2 = k1; // This simply duplicated k1 object. // This k2 takes the reference of k1 EVEN IF IT CHANGES IN THE FUTURE.
// IN THIS SYSTEM THERE IS ONLY 1 CAT
// However 2 reference pointers too the same cat.



console.log(k1); // Kitten
console.log(k2); // The same kitten

k1.name = "Herzel";
k1.age = 5;

console.log(k1); // New update kitten // k1 is just a variable that points too an object!!! // its not the object it self 
console.log(k2); // NEW KITTEN!!! unlike the first example.

// This is the core PROBLEM OF POLYMORTHIZEM!!!!! maybe not sure.

k2.name = "Oscar";
k2.age = 4;

console.log(k1);
console.log(k2);

// Value type has too be number undefined or bolean.