
//  operator, its if you want too put either the left or right answer. ||
// && its the left and right answer together or in their range if its numbers.

//let day = prompt("Enter day of week:"); 
// day = day.toLowerCase(); 

//if (day === "friday" || day === "saturday")
   //  { 
  //  document.writeln("Weekend yaya");
//} else {
 //   document.writeln("Week day");
//}



//




//if(url.startsWith("https://") || url.startsWith("http://)"))
    //{document.writeln("Your url starts correctly");}

//else {document.writeln("Your url nt valid")}

// if the urls don"t start with https:// or http:// - print error message
// If all good , do nothing
const url = prompt("Enter a url:")

if (url.startsWith("https://") === false && url.startsWith("http://") === false) {
    document.writeln("Invalid answer");
}

