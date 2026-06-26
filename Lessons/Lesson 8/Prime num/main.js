// const input = +prompt("Enter a num");
// isPrime(input) ? document.write("NUMBER IS PRIME") : document.write("NUMBER IS NOT PRIME");

function isPrime(num) {


    if (num < 2) { return false; };
    const squirt = Math.sqrt(num); // because sqrt is a very complex math. if you do this too big numbers it will make the system too work harder, instead put a CONST before too make the system calculate only once what is sqrt of some num
    for (let i = 2; i < squirt; i++) {
        if (num % i === 0) { return false; };
    }
    return true;
}

function displayPrimes(min, max){
    for(let i = min; i <= max; i++){
        if(isPrime(i)){document.write((i+" ,"))};
    }
};
const min = +prompt("Enter min num");
const max = +prompt("Enter max num");
displayPrimes(min,max)