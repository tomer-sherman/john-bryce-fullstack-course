// Ex 1//

// for(i = 1;i <= 100 ; i++){
//     document.write(i+ " .")
// }
// document.write("Ex 2 A <hr>")
// //------------------------------

// // Ex 2 a//
// for(i =1; i <= 100; i++){
//     if(i % 2 === 0)
//     {document.write(i+" .")};
// };
// document.write("<hr>")
// //------------------------------
// // Ex 2 B
// for(i = 2; i<= 100; i+=2){
//     document.write(i+".")
// }
// document.write("<hr>")
// //------------------------------
// // Ex 3
// for(i =100; i <= 200; i++){
//     if(i % 2 !== 0)
//     {document.write(i+" .")};
//};
//document.write("<hr>")
// Ex 4
// for(i =100; i >= 1; i--){
//     if(i % 2 === 0)
//     {document.write(i+" .")};
// };
// document.write("<hr>")
// // Ex 4
// for(i =100; i >= 1; i--){
//     if(i % 2 !== 0)
//     {document.write(i+" .")};
// };
// document.write("<hr>")

//  const num = +prompt("Enter a positive num!!")
//  if (num > 0) {
//      for (let i = 1; i <= num; i++) { 
//          if(i % 3 === 0){document.write(i+".")}
//     }

//  }
// let num = +prompt("Enter a positive num!!")
// if (num > 0) {
//     for (let i = 1; i <= num; i++) {
//         document.write(i + ".")
//     }
//     document.write("<hr>")

//      for ( const i = 1; num >= i; num--) {
//         document.write(num + ".")
//     }

// };

// const num1 = +prompt("Enter a min num.")
// const num2 = +prompt("Enter a max num.")
// let tempMin 
// let tempMax 

// if(num1 <= num2){tempMin = num1; tempMax = num2;}
// else{tempMin =num2; tempMax=num1};

// for(tempMin; tempMin <= tempMax; tempMin++){
//     document.write(tempMin+" ,")
//}

// let sum = 0
// for(i =1 ; i<= 10 ; i++){
//  const num = +prompt("Enter a number!")
// sum += num
// };
// const avg = sum / 10
// document.write("The sum is= " +sum+"<br>");
// document.write("The avg is= " +avg);

let max = -Infinity
for(let i =1 ; i<= 10 ; i++){
 const num = +prompt("Enter a number!")
if(max < num){max = num};
};
document.write("The max is= " +max+"<br>");
