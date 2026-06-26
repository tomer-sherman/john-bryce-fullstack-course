
// Synchronous functions.
// Functions that wait don't processed in the code till all the code is finished, from top too bottom.


function displayMessage(){

    console.log("start button");

    showMessage("Hi"); 

    console.log("end button");

}

function showMessage(message){

    console.log(message);
}

function displayNumber(){
    console.log("Start");
    
    const randomNum = calcRandomNum(1,100);
    console.log(randomNum);

    console.log("End");
}

function calcRandomNum(min, max){
    const num = Math.floor(Math.random()*(max-min+1))+ min;
    return num;
}