(function mainScript() {
    // made a new object and infused it with a MAP object
    let users = new Map();
    // Added, added keys and values too it
    users.set("028233848", { id: "028233848", firstName: "Bart", lastName: "Simpson" });
    users.set("039485762", { id: "039485762", firstName: "Homer", lastName: "Simpson" });
    users.set("048576123", { id: "048576123", firstName: "Marge", lastName: "Simpson" });
    users.set("052938471", { id: "052938471", firstName: "Lisa", lastName: "Simpson" });
    users.set("061029384", { id: "061029384", firstName: "Ned", lastName: "Flanders" });

    // ran a loop threw all the keys doo display them on the console.
    // users.keys() refers too the keys
    for (const key of users.keys()) {
        console.log(key);
    }

    // displays all of MAP object
    console.log(users);

    // Every key has a value so i displayed all of the VALUE OBJECTS
    // users.values() refers too the values
    for (const value of users.values()) {
        console.log(value)
    }


    const searchId = prompt("Please id");
    // The get function, if there is a specific value- that the user wrote, 
    // it straight up jumps and finds the value index, and puts it in the customer var.
    const customer = users.get(searchId);

    // a simple if else and the condition is wheather the value that the customer wrote returns a true or false, thats the function of HAS.=> bolean
    if (users.has(searchId)) {
        alert(`Found: ${customer.firstName}${customer.lastName}`);
    } else {
        alert("Error: no valid Id")
    }

    // O(1) time
    // O(n) space
})();