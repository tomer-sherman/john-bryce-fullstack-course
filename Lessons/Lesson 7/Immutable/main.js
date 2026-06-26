let str1 = "Hello";
document.write(str1+"<br>");

str1[0] = "A"; // you cannot change the sting even if you want using this
str1[1] = "M";



// A string is like an object floating in the data base, if you change it too something else, the string will still be the same.
// The code below will demonstrate this // you can relate to a string like an object.
// Unless you define it as LET then if you change it will create a new string however THE FIRST ST1 WILL STILL BE IN THE DATA BASE inside the (garbage collector) it will 
// Become a ZOMBIE OBJECT // but you still cannot change individual letters

document.write("The first letter of str1"+ str1[0]+"<br>");