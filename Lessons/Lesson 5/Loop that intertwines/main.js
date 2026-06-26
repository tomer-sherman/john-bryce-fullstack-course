//const h = +prompt("enter a height")
//const w = +prompt("enter a width")

//for (row = 1 ; row <= h ; row++)
//{ for(col = 1; col <= w; col++){document.write("      *      ")}
//  document.write("<br>");}


//const n = +prompt("Enter a number")

//for (row = 1; row <= n; row++) {

//for(col = n; col >= row ; col-- ){
// document.write(" "+row)
// }

// document.write("<br>")
//}


// לוח הכפל//


for (let row = 10; row >= 1; row--) {


    for (let col = 10; col >= 1; col--) {
        let mult = col * row
        document.write(mult+  "   ");
    }




    document.write("<br>")
}
