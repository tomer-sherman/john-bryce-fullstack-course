
function getAvg(array) {



    let sum = 0
    if (!array || !Array.isArray(array)) {
        throw new Error("The input has too be a valid array.")
    }

    if(array.length === 0){
        throw new Error("The array cannot be empty")
    }

    for (const num of array) {
        if (typeof num !== "number" || isNaN(num)) {
            throw new Error("The array has too be fully numeric")
        }

        sum += num
    }
    const avg = sum / array.length;
    return avg;

}
let numbers = [];

function addNum(){

const arrLength = +prompt("Enter a the array length");
if(arrLength > 10 || arrLength < 0 ){
    throw new Error("Must be a number between 1-10")
}
if(isNaN(arrLength)){
    throw new Error("You must enter a number")
}

for(let i = 0 ; i < arrLength ; i++){
    const num = +prompt("Enter numbers too array");
    if(isNaN(num)){
    throw new Error("You must enter a number")
}
    numbers.push(num);
}
}


try {
    addNum()
    const avg = getAvg(numbers);
    console.log("Avg= " + avg);
}
catch (err) {
    alert("Message: " + err.message);
}

// Inside any function that you call upon other functions you have too use try cath. too warp the code.
// inside the base function, such as getAvg, you have too use throw, too throw a bug.

// A different perspective
// There are 2 programers:
// One that creates the base functions, calc, get, etc.
// Second that uses the base functions too create a new function.

// The first one has to use throw, too throw away SHITY INPUTS OR BUGGS.
// The second one has to respect what the first one threw and wrap his functions in try catch.
