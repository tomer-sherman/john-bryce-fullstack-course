// Array is a few fields without any name opposite the object but it have placement.
// fields are placement depended, every field has different values but it has no name too a single field.
// Every field has an index, first index is always 0 and the second 1 etc.....


const grades = [90, 85, 70, 100, 89, 78, 97, 98];
document.write(`Grades: ${grades} <br>`)
 //an array can be displayed in JS
document.write(`First grade: ${grades[0]}<br>`)
document.write(`Second grade: ${grades[1]}<br>`)
document.write(`Total Grades ${grades.length}<br>`)
document.write("<hr>")

//const index = +prompt("Enter array index: ");
//document.write(`The grade in index: ${index} Is: ${grades[index]}<br>`)
//document.write("<hr>")


const fruits = ["apple ", "banana ", "mango ", "dragon fruit ", "grapes "];
document.write(`Fruits: ${fruits}  <br>`);
console.log(fruits)
document.write(`First fruit: ${fruits[0]} <br>`);
document.write(`Second fruit: ${fruits[1]} <br>`);
document.write(`Last fruit: ${fruits[fruits.length-1]} <br>`); // in this way you can show the last index in the array

