
//1ST EXERCISE//
//const num1 = Number(prompt("Enter your age"));
//if (num1 > 16)
//{document.writeln("The number is: " + num1)}
//else if (num1 === num2 )
//{document.writeln("The number is: " + num1)}
//else{ document.writeln("The number is" + num2)}

//2CND EXERCISE//
//const age = Number(prompt("Enter your age"))
//const numage = 16 - age
//if (age >= 16)
  //  {document.writeln("You can Have a drivers license")}
//else {document.writeln("You cannot have a driver's license. <br> You have "+ numage + "years left" )
//}

//3RD EXERCISE//
//const num1 = Number(prompt("Enter a number"))
//const num2 = Number(prompt("Enter a number"))
//const num3 = Number(prompt("Enter a number"))
//if (num1*num2 === num3){document.writeln("GOOD")}

//4RTH EXERCISE//
//const monthNumber = Number(prompt("Enter a number between 1-12 which represents the months in the year"))
//const winterMonth = [12,1,2,3]
//if (winterMonth.includes(monthNumber))
//{document.writeln("Nice It is Winter")}
//else { document.writeln("It is not winter")}

//5TH EXERCISE//
//const num1 = Number(prompt("Enter a number"))
//const num2 = Number(prompt("Enter a number"))
//const num3 = Number(prompt("Enter a number"))
//if (num1 > num2 && num1 > num3)
//{document.writeln("The number is " + num1)}
//else if (num2 > num3 && num2 > num1)
//{document.writeln("The number is " + num2)}
//else {{document.writeln("The number is " + num3)} }


//6TH EXERCISE//
//const num = Number(prompt("Enter a number"))
//if (num < 0){document.writeln("The number is negetive")}
//else if (100 >= num && num >= 1){document.writeln("The number is between 1-100")}
//else if (1000 >= num && num >= 101){document.writeln("The number is between 101-1000")}
//else if (1001 <= num){document.writeln("The number is above 1000")}
//else if (num === 0){document.writeln("The Number is zero")}

//7TH EXERCISE//
const num = Number(prompt("Enter a score"))
if (0 <=num && num <= 59){document.writeln("FAIL")}
else if (60 <= num && num <= 69){document.writeln("Enough")}
else if (70 <= num && num <= 79){document.writeln("Almost Good")}
else if (80 <= num && num <= 89){document.writeln("Good")}
else if (90 <= num && num <=100){document.writeln("Great")}
