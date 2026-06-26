
// SHAME -- ABOMINATION!!!! you can combine EVERY THING too one function!!!
function plus(){
    const in1Element = document.getElementById("firstNum");
    const in2Element = document.getElementById("secondNum");
    const num1 = +in1Element.value; // if you dont add the + it converts the value into a string! add + and the value is a number
    const num2 = +in2Element.value;

    const num3 = num1 + num2;

    const span = document.getElementById("span");
    span.innerHTML = num3;

};
function minus(){
    //Extract data
    const in1Element = document.getElementById("firstNum");
    const in2Element = document.getElementById("secondNum");
    const span = document.getElementById("span");
    // Convert data into numbers
    const num1 = +in1Element.value; // if you dont add the + it converts the value into a string! add + and the value is a number
    const num2 = +in2Element.value;
    const num3 = num1 - num2;

    // Do something;
    span.innerHTML = num3;

};
function multi(){
    //Extract data
    const in1Element = document.getElementById("firstNum");
    const in2Element = document.getElementById("secondNum");
    const span = document.getElementById("span");
    // Convert data into numbers
    const num1 = +in1Element.value; // if you dont add the + it converts the value into a string! add + and the value is a number
    const num2 = +in2Element.value;
    const num3 = num1*num2;

    // Do something;
    span.innerHTML = num3;

};
function divide(){
    //Extract data
    const in1Element = document.getElementById("firstNum");
    const in2Element = document.getElementById("secondNum");
    const span = document.getElementById("span");
    // Convert data into numbers
    const num1 = +in1Element.value; // if you dont add the + it converts the value into a string! add + and the value is a number
    const num2 = +in2Element.value;
    const num3 = num1/num2;

    // Do something;
    span.innerHTML = num3;

};