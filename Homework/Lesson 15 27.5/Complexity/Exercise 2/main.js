(function mainScript(){
// created a new object special object SET

const randomNumbers = new Set();


// A loop that does its job 1000 times
for(i = 0; i < 1000 ; i ++){
    const num = Math.floor(Math.random()*(20)+1)
    randomNumbers.add(num);
}

// Shows the object SET in the console.
console.log(randomNumbers);

// Only 20 values inside the SET object. since we created only 20 possible answers, and Set blocks new answers with the same 'string' or number too enter.

const userInput = +prompt("Enter a number between 20-1");

// Since Set does not have GET like the map object i used the bolean HAS continue my code.
if(randomNumbers.has(userInput)){
    alert("We have found you num your num is" + userInput)
}else{alert("This number is not in the object")}

//O(1) time The loop i mad is finite ends in 1000
//O(n) I made a loop that is in fact finite, but since its a SET object , There is almost a VERY SMALL possiblity that the object set will not have 20 objects.
// i am not sure i am correct.
// I was incorrect its O(1). since there is a finite amount 20, it cannot go above 20.


})();