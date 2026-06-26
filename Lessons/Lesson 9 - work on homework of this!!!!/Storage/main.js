// Storage
// A place that saves data over time.
//1. cookies - saves data for key-value
// Cookie will be saved as long as the tab of the web is active. - non persistent cookie
// cookie can be saved until some kind of expiration date.- persistent cookie

// Example of a non persistent cookie.
let fullName;
function getData() {
    fullName = prompt("Enter full name: ");
   
};

function saveNonPersistingCookie(){
    document.cookie = "User-full-name= " + fullName;
}

function printData() {
    const data = document.cookie
    alert(data)
}

function clearAll(){
    const now = new Date();
    now.setFullYear(-1)
    document.cookie = "User-full-name=; expires="+now.toUTCString() ;
}

function savePersistentCookie(){
    const now = new Date();
    const month = now.getMonth();
    now.setMonth(month+3);
     document.cookie = "User-full-name=" +fullName +"expires= " +now.toUTCString(); // go over This command!!
}

// session Storage:

 function saveSessionStorage(){
    sessionStorage.setItem("user-full-name", fullName);
}

function readSessionStorage(){
    const data = sessionStorage.getItem("user-full-name"); // local storage and session storage are written in the same name, in terms of logic.
    alert(data);
}

// Practice homework. on this cause i feel fucking tired af

  