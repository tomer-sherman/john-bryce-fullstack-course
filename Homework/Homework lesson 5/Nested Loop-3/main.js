// let num = Infinity
// do {
//     num = +prompt("Enter a number (0 will end the prompt)")
//     for (let i = 1; i <= num; i++){
//         document.write(i+".")
//     };
//     document.write("<br>");
// }
// while (num > 0);

// const num = +prompt("Enter num");

// for(row = 1; row <=num; row++){
//     for(col = 1; col <= num; col++){
//         document.write(" * ")
//     }
// document.write("<br>");
// };

// const height = +prompt("Enter a height");
// const width = +prompt("Enter a width");

// for(row=1; row <=height;row++){

//     for(col = 1; col <= width;col++){
//         document.write("*")
//     }
//     document.write("<br>");
// }

// const num = +prompt("Enter a number base:");

// for(let row = 1; row <= num; row++){

//    for(col = 1; col <=row; col++){
//     document.write("*")
//    }
// document.write("<br>");
// }

// const num = +prompt("Enter num");

// for(row = 1; row <= num; row++){
//     for(col = 1; col <=row; col++){
//         document.write(col+ " .")
//     }
//     document.write("<br>")
// }

// const num = +prompt("Enter num");

// for(let row = 1 ; row<=num ; row++){

//     for(let col = 1; col <= (num-row+1); col++){
//         document.write(col+"")
//     }
//     document.write("<br>");
// };

// const num = +prompt("EnterNum");

// for(row = 1 ; row <= num; row++){
//     for(col = num; col >= 1; col--)
//     {document.write(col+"")};
//     document.write("<br>")
// }

// const num = +prompt("EnterNum");
// for (row = 1; row <= num; row++) {
//     for (col = 1; col <= row; col++) {  
//         document.write(row);
//     }
//      for (col = 1; col <= row; col++) {  
//         document.write("*")
//     }
//     document.write("<br>");
// }

// const height = +prompt("Enter height:");
// const width = +prompt("Enter width:");

// for (let row = 1; row <= height; row++) {
//     for (let col = 1; col <= width; col++) {

//         if (row === 1 || row === height || col === 1 || col === width) {
//             document.write("*");
//         }
//         else{document.write("&nbsp")}

//     }

//     document.write("<br>");
// };


// for (i = 1; i <= Infinity; i++) {

//     const num1 = +prompt("Enter a number");
//     const num2 = +prompt("Enter a number");

//     if(num1 === num2){break};

//     let min = Math.min(num1, num2)
//     let max = Math.max(num1, num2)

//     let message = " ,";

//     for(let i = min; i <= max; i++)
//         {message += i + " ,"};

//     alert(message);

// }




const height = +prompt("Enter a height");
const width = +prompt("Enter a width");

for(row = 1; row <= height; row++){
    for(col = 1; col <= width; col++){

        if(row === 1 || row ===height || col === 1 || col ===width){
            document.write("*")
        }else{document.write("&nbsp;&nbsp")}


    }
    document.write("<br>")
}


