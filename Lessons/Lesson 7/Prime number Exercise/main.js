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