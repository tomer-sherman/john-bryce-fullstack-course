function displayForm() {
    const inputElement = document.getElementById("input"); // find the element using the ID !
    const fullName = inputElement.value;                   // get the specific data you want from  the element
    //alert(fullName);                                       // do something

    // these stages can be cut down like these
    //alert(document.getElementById("input").value); 
    // these gets the specific id you want too work on gets the data and alerts it in the same time, 
    // how ever it means the data is lost after the alert it doesn't exist (what i assume! not sure/ i was correct!!)


    const textareaElement = document.getElementById("textarea");
    const message = textareaElement.value;

    const selectElement = document.getElementById("select");
    const city = selectElement.value;

    const formSubmit = `Full name: ${fullName} 
Message: ${message}
city: ${city}`; //save your data!!!!


    const pElement = document.getElementById("details");
    pElement.innerText = formSubmit;



};

