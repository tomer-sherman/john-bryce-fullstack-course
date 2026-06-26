//let count = 100
//do {
//document.write(count+", ");
//count++;
//} while(count <= 10 );
// its like while but the opposite it checks the condition only at the end of the loop.



let num 
let sum = 0
do{
num = prompt("Enter english if you write end the prompt will end").toLowerCase();
sum = sum + num.length
amos = num.length
alert("The number of letters is: " + amos);
}
while(num !== "end");
document.writeln("The number of letters you wrote is:" +sum)

