(function mainScript() {


    // displayLocation in div;
    // Got the dom of the div and on click it lunches a function
    document.getElementById("divBox").addEventListener("click", async function () {

        // A url of my api site
        const url = `https://jsonplaceholder.typicode.com/users`;

        // i am awaiting that userObject will load in As an Json Object.
        const userObject = await getJson(url);
        showLocation(userObject);


    })


    // Get json(url);
    async function getJson(url) {
        // Awaiting too fetch the url data.
        const response = await fetch(url);
        // makes the url data into a Json String
        const jsonString = await response.json(); // This converts the response too a json object
        // Returns this jsonString object, in this cause it returns the whole, Big api filled with users, an array of users.
        return jsonString

    }

    // This func displays the link of the user object
    function showLocation(userObject) {
        // Dom of div
        const div = document.getElementById("divBox");
        // I routed inside the massive userObject. and went too a specific user with specific geo.
        // and Extracted the data into lat and lng vars
        const lat = userObject[1].address.geo.lat;
        const lng = userObject[1].address.geo.lng;
        // changes the innerHtml of the div
        div.innerHTML = `<a target= "_blank" href="https://www.google.com/maps?q=${lat},${lng}">User Location</a>`;
    }


    // This from above is a classic api way too get info

    // Now we will try too do the same but this time Using the this reference instead of a dom.

    document.getElementById("divBox1").addEventListener("click", async function () {
        // Added try catch cause i forgot.
        try {
            const url = `https://jsonplaceholder.typicode.com/users`;

            // I gave a more acurate name for this promise object
            const usersArray = await getJson1(url);

            const lat = usersArray[1].address.geo.lat;
            const lng = usersArray[1].address.geo.lng;

            // This flows thought the code backwards and seeks A classic way a function is being called then claims a host.
            this.innerHTML = `<a target= "_blank" href="https://www.google.com/maps?q=${lat},${lng}">User Location</a>`;
        } catch (err) {
            alert(err.message)
        }

    })

    async function getJson1(url) {
        const response = await fetch(url);
        const jsonString = await response.json();
        return jsonString
    }

})();

// Inconcludion for this code, (keep in mind i created 2 diffrent getjSON too practice,)

//There are a few subject too conclude.
// 1.AJAX :
// A btn that activates the function throught eventListener("Some kind of html event", the function(){The code})
// in this main function, you create a url const , then you await the Get Json function(url);, after it finishes, you save this in another var and name it apropriatley.
// then you take this var and throw it inside the display Function.
//  In the display function, you take this massive Api  promise object narrow it down too what you want too use and then do a whatever you want too do with that info, Dhtml, change innerHtml whatever.
// In the getJson function you (asnc func since it depends on the data transfer speed), you await for a response this response takes on it Fetch(url);
// then you extract this data and make it a Json Object. that contains a massive Api promise object.

//2. IFE:
// Its acctually quite simple:
// You just soround your code in (); for it not too be owned or named in the main script, this way other coders in the futare cannot accidently overwrite your code.

// 3.This :
// Its simple as well:
// It flows backwards in the code throught arrow functions and then it stops at a classic function called like this (function()) or like this (function greatFunction(argument)) 
// if the function is classic, THIS line referce too who owns the function. who made it work in the first place, It right now in my current coding level it will be probably most of the time it will be id's

