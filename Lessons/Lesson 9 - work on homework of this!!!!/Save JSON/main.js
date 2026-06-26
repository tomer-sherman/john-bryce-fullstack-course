function save() {
    // 1. Get the DOM elements
    const firstNameBox = document.getElementById("firstNameBox");
    const addressBox = document.getElementById("addressBox");
    const emailBox = document.getElementById("emailBox");

    // Check if elements exist to prevent runtime errors
    if (!firstNameBox || !addressBox || !emailBox) {
        console.error("One or more input elements were not found in the HTML.");
        return;
    }

    // 2. Extract their values
    const firstName = firstNameBox.value;
    const address = addressBox.value;
    const email = emailBox.value;
    
    const customer = {
        firstName: firstName,
        lastName: "", // Kept empty so it doesn't crash, fill later if needed.
        address: address,
        email: email
    };

    const data = JSON.stringify(customer);
    localStorage.setItem("customerData", data);
    
    // 3. Log the object and the stringified data
    console.log("Customer Object:", customer);
    console.log("JSON String:", data);

    const bustomer = JSON.parse(data);

    firstNameBox.value = customer.firstName;
    addressBox.value = customer.address;
    emailBox.value = customer.email;
};

// i need to practice DOMS since i didn't really learn it