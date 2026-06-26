const numbers = []; // Empty array.
const min = 1
const max = 50
let sum = 0
for(let i = 1; i <= 100; i++){
const randomNum = Math.floor(Math.random()*(max-min+ 1)) + min;
numbers.push(randomNum);
sum +=randomNum
}

document.write(numbers+"<br>");
document.write(`SUM = ${sum} <br>`);
document.write(`AVG = ${sum/numbers.length}`);


