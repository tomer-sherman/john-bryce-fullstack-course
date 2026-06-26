
// Alert message:
alert("Hello!");

// Display something on the page: 
document.writeln("Test something...<br>");

// Display something on the console:
console.log("Hello my console!");

// Variables:
var age = 12;
console.log("Age: ", age);
console.log("Age: " + age); // Concatenation - שירשור

let salary = 10000;
salary = 15000;
console.log("Salary: ", salary);
salary = 20000;

const identityNumber = "0369854785";
console.log("Identity Number:", identityNumber);
// identityNumber = "0296589654"; // Error.

// Create prices:
const price1 = 100;
const price2 = 150;
const price3 = 190;

console.log("Price 1: ", price1);
console.log("Price 2: ", price2);
console.log("Price 3: ", price3);

// Calc sum and avg:
const total = price1 + price2 + price3;
const avg = total / 3;

console.log("Total prices: ", total);
console.log("Price average: ", avg);

const name = "Moishe";
const phone = "052-9658745";
const email = "moishe@gmail.com";

// String Concatenation - שרשור:
document.writeln("Name: " + name + ", Phone: " + phone + ", Email: " + email + "<br>");

// String Interpolation - שיבוץ של קטע או מילה בתוך טקסט:
document.writeln(`Name: ${name}, Phone: ${phone}, Email: ${email}<br>`);

document.writeln(price1 + " + " + price2 + " + " + price3 + " = " + total + "<br>");
document.writeln(`${price1} + ${price2} + ${price3} = ${total}<br>`);

document.writeln("Bye"); // Quote
document.writeln('Bye'); // Apostrophe
document.writeln(`Bye`); // Backtick
