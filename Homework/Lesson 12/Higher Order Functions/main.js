const numbers = [];

for(let i = 0; i <20 ; i ++){
    const num = Math.floor(Math.random()*(100-1+1)+1)
    numbers.push(num);
}

const numBr = numbers.forEach(num => {document.write(num +"<br>")});
document.write("<hr>");

const firstNumEven = numbers.find(num => num > 50);
document.write(firstNumEven);
document.write("<hr>");

const oddNum = numbers.filter(num => num % 2 !== 0).forEach(num =>document.write(num +","));
document.write("<hr>");

const indexOf = numbers.findIndex(num => num > 50);
document.write(indexOf);
document.write("<hr>");

const numsss = numbers.forEach(num => num %2 === 0 ? document.write(num +" Even,"): document.write(num +" Odd,"))
document.write("<hr>");

const max = Math.max(...numbers);
document.write("The max value: "+max);