// EXERCISE 1//
//let fields;
//let array = [];
//let sum = 0;


//for (let i = 1; i <= 10; i++) {

    //fields = +prompt("Enter a positive number");
   // array.push(fields);
  //  sum += fields;
// if(fields < 0){alert("s2pid??!!");break;};

//}
//const avg = sum/array.length;
//let minNum = Math.min(...array)
//let maxNum = Math.max(...array)

//document.write(array+ "<br>");
//document.write(`The sum is = ${sum} <br>`);
//document.write(`The avg = ${avg} <br>`);
//document.write(`The highest number is = ${maxNum} <br>`);
//document.write(`The lowest number is = ${minNum} <br>`);

//EXERCISE 2//

//const array = [];
//const min = -50
//const max = 50
//let evenNum = 0
// let unevenNum = 0
// let positiveNum = 0
// let negativeNum = 0
// let sum = 0
// for(i = 1; i <= 100; i++){


// const randomNum = Math.floor(Math.random()*(max - min +1)) + min

// if(randomNum % 2 === 0){evenNum++};
// if(randomNum % 2 !== 0){unevenNum++};
// if(randomNum > 0){positiveNum++};
// if(randomNum < 0){negativeNum++};
// sum +=randomNum
// }

// document.write("Even numbers in the array= " +evenNum + "<br>");
// document.write("Uneven numbers in the array= " +unevenNum+ "<br>");
// document.write("Positive numbers in the array= " +positiveNum+"<br>");
// document.write("Negative numbers in the array= " +negativeNum+ "<br>");
// document.write("The avg is= " +sum/100);

// Exercise 3//

const fruitsArray = ["Apple", "Banana", "Mango", "Orange", "Strawberry", "Peach", "Pineapple", "Kiwi", "Blueberry", "Watermelon"];

let longestWord = "";
for(let i = 0 ; i < fruitsArray.length ; i++){
if(longestWord.length < fruitsArray[i].length){
    longestWord = fruitsArray[i];
};
}
document.write("" + longestWord)














