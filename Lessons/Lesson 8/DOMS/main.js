// DOM - document object model.
// Every html tag you make is an object somewhere in the data.

function paintHeader() {
    const h1Element = document.getElementById("mainHeader");
    h1Element.style.color = "green";
    h1Element.innerText = "Amazing!";
}

function addPrompt() {
    const p1Element = document.getElementById("firstP");
    const userText = prompt("Write anything you want!");
    p1Element.innerText += " " + userText;
    p1Element.style.backgroundColor = "lightblue";
}

function evenChecker() {
    const p1Element = document.getElementById("firstP");
    const num = +prompt("Input a number!");
    // if (num % 2 === 0) {
    //     p1Element.innerText = "Even!!"
    //     p1Element.style.backgroundColor = "green";
    // }
    // else {
    //     p1Element.innerText = "ODD!!"
    //     p1Element.style.backgroundColor = "red";
    // }

    p1Element.innerText = (num % 2 === 0) ? "Even" : "ODD!!";
    p1Element.style.backgroundColor = (num % 2 === 0) ? "green" : "red";


};



function alertBox(){
    const inputElement = document.getElementById("firstNameBox");
    const name = inputElement.value; // this is how you get value out of input box!!
    alert(name);
}