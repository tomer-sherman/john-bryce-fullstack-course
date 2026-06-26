//let num = +prompt("Enter a number: ");
//let sum = 0;

// 8415 how can i get the 5 mathematically//
//num % 10 8415 % 10 ----> always gives the right digit of the number//
//while(num !==0){
//const mod = num % 10; // mod is equal too the right digit of the number 8415===> mod is equal too 5 in this case.
//(num - mod) / 10; // in this case the whole number minus the right digit 8415 - 5 = 8410. since its not making anything in this code cause its not entering new var's you can delete this line.
//sum = sum + mod; // sum was 0 now its 0 + mod in this case 5 the new sum is 5 // this is a function too update the new sum!!
//num = (num - mod) / 10; // (8415 - 5)= 841 // this function is too update new num!!!
//}

//document.writeln("Sum:" +sum)

let num = +prompt("Enter a number: ");
let sum = 0;


while(num !==0){

let mod = num % 10; 
num = (num - mod) / 10; 
mod = 1
sum += mod
}

document.writeln("Sum:" +sum)


