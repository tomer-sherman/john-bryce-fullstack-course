//const customer = {
   // firstName: "Moishe",
   // lastName: "Cohen",
   // idNum: "02123123", // keep in mind if a number has 0 in the start it has too be a string
  //  address: "Hertzel 17, Tel Aviv"

//};

//document.write("first name: " +customer.firstName + "<br>");
//document.write("Last name: " +customer.lastName + "<br>");
//document.write("Customer Id: " +customer.idNum + "<br>");
//document.write("Address: " +customer.address + "<br>");
//document.write(customer); // Keep in mind in JS when you write this code, JS cannot show you the address cause its an OLD CODING LANGUAGE
// when you want too show all the object variables, easier in the web write the customer in the console log and copy it too the Doc


//console.log(customer); // if you go too the console you will see the full Vars of this object!!

//document.write("<hr>")


//const fieldName = prompt("Enter a field name"); 
//document.write(`The value in the field ${fieldName} is: ${customer.fieldName} <br>`);
//document.write(`The value in the field ${fieldName} is: ${customer[fieldName]}`); // this way of writing is very rare since its use is very rare as well



const phoneId = {
    manufacturer: "Sumsung",
    model: "X3",
    price: 50,
    screenSize: "8inch",

};
document.write(`Manufacturer: ${phoneId.manufacturer} <br>`);
document.write(`Model: ${phoneId.model} <br>`);
document.write(`Price: ${phoneId.price} <br>`);
document.write(`Screen size: ${phoneId.screenSize} <br>`);

document.write(`<hr>`);

phoneId.price = 60; // you can change the inner fields inside the object even if you define the object as CONST
document.write(`Price: ${phoneId.price} <br>`);


phoneId.color = "Black"; // WILL BE CREATED AS A NEW FIELD
document.write(`Color: ${phoneId.color} <br>`); // undefined

console.log(phoneId)