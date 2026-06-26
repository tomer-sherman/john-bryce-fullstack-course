// A Boolean Function is a function that returns true || false;
// It checks if a condition is TRUE or FALSE.
// For example if today is a weekend/ false today is monday// or is today rainy in our location // YES OR NO there is no maybe.
// Boolean Function is usually already in a conditioned area.

// function isPositive(num){
//     if(num > 0){return true};
//     return false;
// }

//Shorter Syntax

//function isPositive(num){
//  return num > 0 ?  true :  false;
//}

//AN EVEN SHORTER SYNTAX!!

function isPositive(num) {
    return num > 0; // this is a boolean expression, i say too the function too return num > 0, if num is lower then zero num > 0 is false. THUS RETURNING FALSE.
    // if num is higher than zero then this whole function is TRUE!!!!!
}


//const input = +prompt("Enter a number:");
//isPositive(input); // fade - away in this way the return of the function will fade away. it will return but it will fade. you need too make a var.
//const result = isPositive(input);
//result? document.write(`The number ${input} is positive <br>`) : 
//document.write(`The number ${input} is negative<br>`); // This line of code NOT GOOD

//More accurate syntax
//if(isPositive(input)){document.write(`The number ${input} is positive <br>`);}
//else{document.write(`The number ${input} is negative <br>`)};

//Exercise 1

function evenNumberChecker(num) {
    return num % 2 === 0;
};
//const input = +prompt("Enter a number");
//evenNumberChecker(input) ? document.write("The number is even"): document.write("The number is UNEVEN")


//Exercise 2

function weekendChecker() {
    const today = new Date();
    const dayNumber = today.getDay();
    return dayNumber >= 4;
}
weekendChecker() ? document.write("Today is a WEEKEND YAY!!!!! <br>") : document.write("Ahh shit today is not the weekend FUCK!!!! <br>");

//Exercise 3
const grades = [-1, 51, 52, 0, 3, 1]
function validGradeChecker(arr) {

    for (const item of arr) {
        if (item < 0 || item > 100) { return false };
    };
    return true;

}
validGradeChecker(grades) ? document.write("True!!") : document.write("False!!");

