//for(let i = 1; i<=10; i++)
//{
// const num= +prompt("Enter a number, up to 100:");

//As you can see in the command area you can put an IF.
// Using the combination of IF & BREAK you can validate.
//Look at the order of the code, First of all you have (INIT, CONDITION, ADVANCE){COMMAND, inside the command before the alert we 
// we placed the BREAK thus making the loop end}

//if(num > 100)
//{alert("S2pid??"); continue;}
//alert("power: " + num**2);


//<--- continue
//}

// <---- break

// continue Underminds the rest of whats inside {The Commands} And gets back too the Advance Stage!
// <----- break breaks the loop and ends reading it , it goes too after the {command}


//let sum = 0;
//let success = true;
//for (i=1; i<=10; i++){

// const num = +prompt("Enter a number between 1 and 100: ");
// if(num > 100 || num < 1){
//  alert("S2PID!!");
//   success = false;
// break;
// }

//sum += num;
//}

//if(success){alert("The sum is: " +sum)}; 
// keep in mind if you use TRUE OR FALSE (flag) When you write the condition of success = true don't write the = true just write success.

//for ( i = 1; i <= 10; i++) {
//const num = +prompt("Enter a number between 1-100")
// if (num > 100 || num < 1) { alert("S2pid!!"); break;};

// for(a = 1; a <= num; a++){document.write("  " +a)};

//  document.writeln("<hr>")

//}

// keep in mind while using for you don't have too identify the variable inside it as LET OR CONST

let num = +prompt("Enter a number")
for (i = 1; i <= num; i++) {

    document.writeln("*");

}




