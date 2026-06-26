"use strict";

(function mainScript(){

    // Locate element:
    // const btn1 = document.getElementById("btn1");
    // const btn2 = document.getElementById("btn2");
    // const btn3 = document.getElementById("btn3");

    // // Register Button 1 click:

    // btn1.addEventListener("click", function(){
    //     btn1.style.backgroundColor = "green"
    // })
    // btn2.addEventListener("click", function(){
    //     btn2.style.backgroundColor = "green"
    // })
    // btn3.addEventListener("click", function(){
    //     btn3.style.backgroundColor = "green"
    // })


    // In html every button form and, headers, tables, are stored in an inner array.


    document.getElementById("btn1").addEventListener("click", function () {
        // THIS is an object that Is referring too the btn that made this function.
        console.log(this);
        this.style.backgroundColor = "green";
    })

    document.getElementById("btn2").addEventListener("click", function () {
        // Only if you use THAT, this function will work,
        const that = this;
        setTimeout(function () {
            that.style.backgroundColor = "green"
        }, 1000);
    })

    // So JS made a anouther feature too arrrow functions

    document.getElementById("btn3").addEventListener("click", function () {
        // We use the NORMAL FUNCTION as i called it above.
        setTimeout(() => {
            // arrow less function passes the owner ship of Who made her work too the function before.
            this.style.backgroundColor = "green"
        }, 1000);
    })

    // This example will not work
    // The arrow Func will pass its owner ship too The mainScript function. 
    // in this case because the function is contained with a IFE.
    // that uses the old method no arrow func- THE FUNCTION DOESN'T HAVE AN OWNER. cause it stopped the THIS flow.
    // if all of the script was in a arrow function then the owner would be The WINDOW!!.
    document.getElementById("btn4").addEventListener("click", () =>{
        setTimeout(() => {
            console.log(this); // you will see in the console- undefined
            this.style.backgroundColor = "green"
        }, 1000);
    })









})();


