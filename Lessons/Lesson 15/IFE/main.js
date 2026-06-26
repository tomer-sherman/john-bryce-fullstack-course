"use strict";


(function MainScript() {
// Locate required elements:
const btnCalc = document.getElementById("numberCalcBtn");
const span = document.getElementById("spanBox");
const numBox = document.getElementById("inputNum");

// Register button click event:
btnCalc.addEventListener("click" , ()=>{
    const num = +numBox.value;
    span.innerText = `${num}*${num} = ${num**2}`
});

// Register test box key event:
numBox.addEventListener("keyup", ()=>{
    console.log(numBox.value);
})

// This kind of structure is easier too work with since,
// You don't have too go up and down the Code, too your event Listener every time you write a function

})();













