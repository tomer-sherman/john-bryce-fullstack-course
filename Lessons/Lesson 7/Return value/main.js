
//  Return value,
//  A function can bring back a value that has been stored in the code
// For example a function calculates a avg and then instead of displaying it it returns it.
// A function that calculates NEVER DISPLAYS the calculation.
// It always returns, the calculation.
// Always keep in mind more people are gonna work on the code and the functions you make

//-------------------------------------------
//Garbage CODE throw in the bin:
// function calcAvgOnPage(a, b, c) {
//     const sum = a + b + c;
//     const avg = sum / 3;
//     document.write(avg);
// };
// calcAvg(10,23,30);
//-----------------------------------

// Good code cherish it: !!
function calcAvgOnPage(a, b, c) {
    const sum = a + b + c;
    const avg = sum / 3;
    return avg; // this line is like the break; in a loop it finishes the function.
};
const result = calcAvgOnPage(10, 23, 30);




// Exercise 1

function longerString(string1, string2) {

    string1 = prompt("Write something random:"); // once again try too seperate from the main script and the point of the function.
    string2 = prompt("Write something random:");

    let stringLength = ""; // used let because the var is gonna be changed
    if (string1.length >= string2.length) { return string1 }
    else { stringLength = string2 };
    return stringLength

}
//const longestString = longerString();
//document.write(longestString+"")

// Exercise 1 Better code:

function getMaxLengh(str1, str2) {
    //if(str1.length >= str2){return str1.length} // You can use return too store you data later in a more efficient and elegant way.
    //else{return str2.length}; // there is actually no need of else you can write this return line after the if line is done. the most elegant way is ternary actually.
    return (str1.length >= str2.length ? str1.length : str2.length);
}

//const string1 = prompt("Write a random message:");
//const string2 = prompt("Write a random message:");
//const maxLength = getMaxLengh(string1,string2);
//document.write("The max string length is:" + maxLength);

// Exercise 2//

const grades = [90, 80, 79, 100, 78, 77, 96];

displayArray(grades);
const avg = calcAvgArray(grades);
document.write(`Avg = ${avg.toFixed(2)} <br>`)
const max = maxValueArray(grades);
document.write(`Max= ${max} <br>`)
const min = minValueArray(grades);
document.write(`Min= ${min} <br>`)

//Display array function:
function displayArray(arr) {
    for (const item of arr) {
        document.write(item + ", ")
    }
    document.write("<br>")

}

//Average
function calcAvgArray(arr) {
    let sum = 0;
    for (const items of arr) {
        sum += items
    };
    const avg = sum / arr.length
    return avg;
}
//Max
function maxValueArray(arr) {

    let max = 0 // keep in mind this max is good if all the numbers in the array are positive a better way of coding is to write MAX = ARR[0]
    for (const items of arr) {
        if (max < items) { max = items }
    }
    return max;
}

//Min
function minValueArray(arr) {

    let min = arr[0]; // in this case if you kept max = 0 since if the numbers are positive the min num will always be 0
    for (const items of arr) {
        if (min > items) { min = items };
    }
    return min;
}








