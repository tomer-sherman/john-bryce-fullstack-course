import { ArrOp } from "./ArrayOperations.js";
// Created an array with 10 random numbers 0-100
let numArr = [];
for (let i = 1; i <= 10; i++) {
    const num = Math.floor(Math.random() * 101);
    numArr.push(num);
}
console.log(numArr);
// This is where i use the ArrOp class as a utility tool too get, my wanted values;
const sum = ArrOp.getSum(numArr);
document.body.innerHTML += `The sum is : ${sum} <br>`;
const avg = ArrOp.getAvg(numArr);
document.body.innerHTML += `The avg is : ${avg} <br>`;
const max = ArrOp.getMax(numArr);
document.body.innerHTML += `The max is : ${max} <br>`;
const min = ArrOp.getMin(numArr);
document.body.innerHTML += `The min is : ${min} <br>`;
document.body.innerHTML += "<hr>";
// Imported the Object Counter class for experimantal purposes
import { ObjectCounter } from "./objectCounter.js";
// Created 4 objects using the ObjectCounter Class.
const amos = new ObjectCounter();
const gaming = new ObjectCounter();
const theo = new ObjectCounter();
const bald = new ObjectCounter();
