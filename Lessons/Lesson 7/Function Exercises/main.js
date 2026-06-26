function minMaxNum(num1, num2){
return num1 >= num2 ? num1 : num2;
};
// const input1 = +prompt("Enter a random number");
// const input2 = +prompt("Enter a random number");
// const result = minMaxNum(input1, input2); // stored the RETURN INSIDE A CONST VAR.
//document.write(result +"")

function minMaxNum3(num1, num2, num3){
const numberArray = [num1, num2, num3];
let temp = numberArray[0];
for(const item of numberArray){
if(temp < item){temp = item};}
return temp;
};
// const input1 = +prompt("Enter a random number");
// const input2 = +prompt("Enter a random number");
// const input3 = +prompt("Enter a random number");
// const result = minMaxNum3(input1, input2, input3);
// document.write("The max num is: " +result);

function longStringChecker(arr){
    let temp = arr[0];
    for(const item of arr)
        {if(temp.length < item.length){temp = item}};
    return temp;
};

// let wordsArr= [];
// const input1 = prompt("Write a random word");
// const input2 = prompt("Write a random word");
// const input3 = prompt("Write a random word");
// wordsArr.push(input1);
// wordsArr.push(input2);
// wordsArr.push(input3);
// const result = longStringChecker(wordsArr); // When you want too save the Return of the function use some kind of var and = equalize it as the function itself
// document.write("The longest word is: " + result);

function displayObject(object){
for(const key in object){
    document.write("Key: " + key + "Value: " + object[key]+ "<br>");
}
};
// const carParts = {
//     engine: 2500,
//     transmission: 1500,
//     battery: 120,
//     tires: 600
// };
// displayObject(carParts);


function firstNum(num){
   if(num <= 1){return false;};
   for(let i=2 ; i < num; i++){
    if(num % i === 0){return false;}};
    return true;}
// const input = +prompt("Enter a random number");
//  if(firstNum(input)){document.write("The number you wrote is gay!!")}
//  else{document.write("The number you wrote is not gay SAD uWu")};

function firstNumLoop(min,max){
    for(let i = min; i <= max; i++){
        if(firstNum(i)){document.write("Number= " + i + "<br>")}
    }
};

const inputMin = +prompt("Enter min num:");
const inputMax = +prompt("Enter max num:");
firstNumLoop(inputMin, inputMax);
