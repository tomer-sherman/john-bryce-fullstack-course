(function mainScript() {

    document.getElementById("btn1").addEventListener("click", () => {
        const num = +prompt("Enter a number higher than zero");
        smiley(num);

    })



    function smiley(n) {
        // Set up a condition
        if (n <= 0) { return }


        // execute one step of the func
        document.write("😁");

        // call the func inside the func/
        smiley(n - 1);
    }

    //----------------------------------------------------------

    document.getElementById("btn2").addEventListener("click", () => {
        const num = +prompt("Enter a positive number");
        nToo1(num);
    })


    function nToo1(n) {
        if (n <= 0) { return };
        document.write(n + ",")
        nToo1(n - 1);
    }
    //----------------------------------------------------------

    document.getElementById("btn3").addEventListener("click", () => {
        const num = +prompt("Enter a positive num 7 or higher");
        moduloStrange(num);
    })

    function moduloStrange(n) {
        if (n < 7) { return };

        if (n % 7 === 0 || n % 10 === 7) {
            document.write(n + ",");
        }
        moduloStrange(n - 1);

    }
    //-----------------------------------------------------------
    document.getElementById("btn4").addEventListener("click", () => {
        const num = +prompt("Enter a positive num");
        document.write("The sum is: " + sumNums(num));
    })

    function sumNums(n) {
        if (n <= 0) { return 0 }


        // n = 10
        //   10 + 9 + 8 + 7 ...... until the recursion ends, only then it returns its full answer outside the function!!

        // This is a call Stack.
        // n + something
        // n -1 + something
        //etc...
        // and in the end there is going too return a chain. of n + (n-1) + (n-2) etc........

        return n + sumNums(n - 1);
    }

    //---------------------------------------------------------------
    document.getElementById("btn5").addEventListener("click", () => {
        const num = +prompt("Enter a positive num");
        document.write("The azeret is " + nAzeret(num));
    })

    function nAzeret(n) {
        if (n <= 0) { return 1 }
        // Has too return 1 cause if it returns 0 it will make all all of the funcs return 0



        return n * nAzeret(n - 1);
    }
    // ------------------------------------------------------------------
    document.getElementById("btn6").addEventListener("click", () => {
        const num = +prompt("Enter a positive num");
        returnNto1(num);
    })

    function returnNto1(n) {
        if (n <= 0) { return }

        returnNto1(n - 1);

        document.write(n + ",");


    }
    //---------------------------------------------------------------------
    let numbers = [];

    document.getElementById("btn7").addEventListener("click", () => {

        for (i = 1; i <= 3; i++) {
            const num = +prompt("Enter a positive num 3 times");
            numbers.push(num);
        }

        document.write("The sum is: " + sumArray(numbers))


    })






    function sumArray(array) {
        if (array.length === 0) {
            return 0;
        }

        return array[0] + sumArray(array.slice(1));

    }

    //-----------------------------------------------------
    let numbers1 = [];

    document.getElementById("btn8").addEventListener("click", () => {

        for (i = 1; i <= 3; i++) {
            const num = +prompt("Enter a positive num 3 times");
            numbers1.push(num);
        }

        document.write("The max num is: " + maxArray(numbers1))


    })

    function maxArray(array) {
        if (array.length === 0) {
            return 0;
        }

        let maxValue = maxArray(array.slice(1));

        if (array[0] >= maxValue) { return array[0] }
        else { return maxValue }
    }
    //-------------------------------------------------------
    document.getElementById("btn9").addEventListener("click", () => {

        const string = prompt("Enter a symetric string")

        isSymmetric1(string) ? alert("String symetric") : alert("NOT SYMETRIC");




    })
    //aa

    function isSymmetric1(string) {
        if (string.length === 1) { return true };  // Solves odd strings
        if (string.length === 2) { return string[0] === string[1] ? true : false; } // Solves even strings
        if (string[0] !== string[string.length - 1]) { return false; }

        let newString = string.slice(1, string.length - 1);
        return isSymmetric1(newString);
    }

    //7 5 3 1
    //6 4 2
    // ----------------------------------------------------------
    document.getElementById("btn10").addEventListener("click", () => {
        const num = +prompt("Enter num");
        alert("The sum of the digits is: " + sumDigits(num));
    })

    function sumDigits(n) {
        if (n < 9) { return n };

        return n % 10 + sumDigits(Math.floor(n / 10));


    }
    //------------------------------------------------------------
    document.getElementById("btn11").addEventListener("click", () => {
        const customer = {
            firstName: "Moishe",
            lastName: "Ufnik",
            address: { city: "Tel Aviv", street: "Hertzel", house: 12 }
        }

        displayObj(customer);

    })

    function displayObj(obj) {
        if (typeof obj !== "object") { return false; }

        for (const key in obj) {
            document.write(key + ": " + obj[key] + "<br>")

            if (typeof obj[key] === "object") { displayObj(obj[key]) }

        }

    }
    //---------------------------------------------------------------------
    document.getElementById("btn12").addEventListener("click", function () {

        const customer = {
            firstName: "Moishe",
            lastName: "Ufnik",
            address: { city: "Tel Aviv", street: "Hertzel", house: 12 }
        }

        console.log(returnArray(customer))

    })

    function returnArray(obj) {
        if (typeof obj !== "object") { return false; }

        let array = [];
        for (const key in obj) {


            if (typeof obj[key] === "object") {
                array.push(...returnArray(obj[key]));
            } else {
                array.push(obj[key]);
            }

        }

        return array;
    }



})();