document.writeln("Hello TypeScript");
console.log("Hello");
let age: number; // Lets you edit you'r type of var, you cannot change this var too a string.
age = 20;
console.log(`age: ${age}`);
//age = "hello Amos"; will not work

let salary = 15000; // If you initialize it with a number, it has too be a number.
salary = 16000;

console.log(`salary: ${salary}`);

let data; // any type Don't use this usually since it works now like the old js. which is old and if you name vars the same it can fuck up the code.
data = 10;
console.log(`data: ${data}`);


let message: string | number | boolean; // you can choose which type of var it will be, UNION TYPE
message = "Amazing";
message = 42;
message = true;

let kitten = { name: "Mitsi", age: 4 };
console.log(`name: ${kitten.name}`)
console.log(`age: ${kitten.age}`)

//kitten.color = "black"; You cannot, add or change an object like JS from the outside.

let car: { manufacturer: string, year: number }; // THIS SOLIDIFIES the object. you can now put values inside according too the type.
car = { manufacturer: "Lambo", year: 2026 };
// car = {manufacturer:"Lambo", year: "hi"}; ERROR you cannot change the year too a string
// car = {manufacturer: true, year: 2026};   ERROR you cannot change the manufacturer too a boolean, singe you didn't config it.


let grades: number[] = [];
grades.push(90)
grades.push(95)
grades.push(10)
//grades.push("Hi") will not work.

//------------------------------------------------------
// You can defend your functions return!!!! it will not return something that isn't a number.

function getAvg(arr: number[]): number {
    let sum = 0;
    for (const number of arr) {
        sum += number
    }

    const avg = sum / arr.length;
    return avg;
}

console.log(`Avg: ${getAvg(grades)}`);



// If you want a function that returns nothing but only doe's usually ui stuff

function displayMsg(msg: string): void{
    document.write(msg);
    // return "1234" // Error. will not work this func doesn't return anything
}
