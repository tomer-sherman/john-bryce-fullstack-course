const numbers = [12,23,34,45,56,78,98];
document.write(numbers+ "<hr>");

//Adding another number at the end:
//numbers.push(123);
//document.write(numbers+ "<hr>");

// Delete a number:
//numbers.splice(4);
//document.write(numbers+ "<hr>");

//Delete one index
//numbers.splice(4, 1);
//document.write(numbers+ "<hr>")

for(let index = 0 ; index < numbers.length; index++){
    document.write(numbers[index] + "<br>")
}
