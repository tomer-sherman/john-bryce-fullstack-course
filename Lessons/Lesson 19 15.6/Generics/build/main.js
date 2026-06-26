// Better too use this i think since its more readable by other coders.
printMessage("Hello"); // Here TMsg is a string
printMessage(1234); // Here TMsg is a number
printMessage(true);
printMessage(new Date());
//printMessage<string>(1234); // Error will not work since number is not string
// Using this generic type too avoid using any type.
printMessage("cool"); // Here TMsg is a string
// This generic usually is only used when you want too fit, a couple of different,
// Generics is a new type that you create.
function printMessage(message) {
    document.body.innerHTML += message + "<br>";
}
// More complicated use.
// Go over this, <what is this> i guess its what the function works with. its like you are telling it, work with this new kind of type.
// I understand what is in the argument.
function saveLocalStorage(key, value) {
    // The setItem method, can take inside its argument only string, Thats why you have "" before the value.
    localStorage.setItem(key, "" + value);
}
// Here written what will the function returns, that i understand
function read(key) {
    // The reason you have too write here | null is because getItem can return null. // Thats why you have too too change the (return area, too this: TValue | null)
    const value = localStorage.getItem(key); // It returns back the string and converts it type too TValue
    return value;
}
// When you write <some type> you tell the code, what TValue is. and how you should send the argument.
// look again at the argument, of saveLocalStorage.
saveLocalStorage("color", "Red");
saveLocalStorage("times", 5);
const myColor = read("color");
let myTimes = read("color");
//myTimes = read<string>("times"); // ERROR
document.body.innerHTML += `Color: ${myColor}<br>`;
document.body.innerHTML += `Times: ${myTimes}<br>`;
document.body.innerHTML += "<hr>";
////---------------------------------------------------
import { Sms } from "./sms.js";
const sms1 = new Sms("0526910602", "Hi");
sms1.send();
const sms2 = new Sms("0526910620", 1234);
sms2.send();
// const sms3 = new<number>("0526910602",true); // Error will not work since true is bolean and not a number.
//--------------------------------
const fruits = new Set();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Apple");
fruits.add("Orange");
fruits.add("Apple");
for (const item of fruits) {
    document.body.innerHTML += item + " ";
}
document.body.innerHTML += "<br>";
