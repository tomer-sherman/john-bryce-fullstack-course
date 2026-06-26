// A function, that calls her self inside a function, it then continues, It awaits its own completion then goes on.
"use strict";
(function mainScript() {

    document.getElementById("btn1").addEventListener("click", () => {

        printStarts(3);





    })

    // Normal way Print n stars
    // function printStarts(n){
    // for(let i = 1; i <=n; i++){
    //     document.write("*");
    // }
    // }

    // A couple of conditions for recursion.
    //1. just like normal funcs you need name(argument);

    function printStarts(n) {

        // The Condition
        // It exist the function, when an argument is 0 or lower
        if (n <= 0) {
            return;
        }



        document.write("*"); //The mission of the function- execute only 1 step of the task
        printStarts(n - 1); // Recursive calls, send entire task - the one who was already done.

    }

    // It is like a loop, the argument above represents the Number of times,
    // The condition, makes the recursion END like a WHILE(condtion)
    //And in the end, you EXECUTE ONLY ONE STEP.
    //Then you call the function again removing 1 from the argument, then when it hits 0 it will return and EXIT THE FUNC!!!!
    // But the call Doesnt go throught the loop of the fun, IT CALLS A NEW FUNCTIONS!!! with new arguments.

    // Before using Recursion ask yourself if the algorithem requires recursion or data base requires recursion.
    // IF yes then you doo recursion
    // If no then you don't


    document.getElementById("btn2").addEventListener("click", () => {

        const num = +prompt("Enter a number");
        printNto1(num);



    })

    function printNto1(n) {

        if (n <= 0) {
            return;
        }

        for (let i = n + 1; i > 1; i--) {
            document.write("*")
        }

        document.write("<br>");

        printNto1(n - 1);
    }

    document.getElementById("btn3").addEventListener("click", () => {
        const num = +prompt("Enter a number");
        const factorial = calcFactorial(num);

        alert(`${num}! = ${factorial}`)

    })

    function calcFactorial(n) {
        if (n <= 1) {
            return 1;
        }

        return n * calcFactorial(n - 1);
    }

    document.getElementById("btn4").addEventListener("click", () => {
        const num = +prompt("Enter a number");
        const sumNum = sumDigits(num);

        alert(`${num}! = ${factorial}`)

    })


    // 1845
    function sumDigits(n) {

        if (n <= 9) {
            return n;
        }
        //Right digit  + //Whole num/10 as the argument of sumDigits.
        //5  + (184) ===> 4 + (18) ==== > 8 + (10) ====> 0 + 1 ====> math.floorOf0.1 RETURNS
        // 5 + 4 + 8 + 1           
        return (n % 10) + sumDigits(Math.floor(n / 10));
    }





})();