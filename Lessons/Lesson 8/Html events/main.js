// Html Events - 
// Events - specific actions that happen from visual components or the user or the web or the system
// You can write code that will happen, in the moment of the events. and the code will activate.
//for example PRESSING A BUTTON
// Writing inside a text prompt will trigger a keypress event.
// there are a ton of events in HTML.

function sayHi() {
    alert("ARIEL IS SO FUCKING FAT ARIEL FATT AND SEXY");
}
function getTime() {
    const now = new Date();
   const time = now.toLocaleTimeString();
    alert("Formatted Time: " + time);
}

function randomNum(){
    const min = 0;
    const max = 100;
    const num = Math.floor(Math.random()*(max-min+1))+min;
    console.log(num)
}
