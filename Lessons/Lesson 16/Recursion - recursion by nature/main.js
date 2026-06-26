// A function, that calls her self inside a function, it then continues, It awaits its own completion then goes on.
"use strict";
(function mainScript() {

    const customer = {
        firstName: "Moishe",
        lastName: "Ufnik",
        address: {
            city: "tel-aviv",
            street: "herzel",
            house: 12,
            zipcode: 12345,
            geo: {
                lat: 32,
                lng: 34
            }
        },
        phone: "0543219456",
        email: "moishe@gmail.com"
    }


    document.getElementById("btn1").addEventListener("click", () => {
        const count = countProps(customer);
        alert("Total properties: " + count);
    })

    function countProps(obj) {
        let count = 0
        for (const prop in obj) {
            count++

            // In Js an array is considered an object, so if in the object it stamps upon an array, it will count all the items inside the array.
            // So if you DONT want too scan the array, you have too add && !Array.isArray(obj[prop]). you will only add it as a property
            if (typeof obj[prop] === "object" && !Array.isArray(obj[prop])) {
                count += countProps(obj[prop])
            }
        }
        return count;
    }

    document.getElementById("btn2").addEventListener("click", () => {
        printProps(customer);
    })

    function printProps(obj) {

        const spaces = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";

        for (const prop in obj) {

            document.write(prop + " ➡️ " + obj[prop] + "<br>")

            if (typeof obj[prop] === "object" && !Array.isArray(obj[prop])) {
               
                printProps(obj[prop])
                
            }  
                
            
        }

    }








})();