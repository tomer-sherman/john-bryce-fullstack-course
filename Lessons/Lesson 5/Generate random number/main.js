//const a = Math.random(); // from 0.0 (including)- 1.0 (excluding)
//document.write("a = " +a+ "<br>");

//const b = a*10; // from 0 (including) - 10 (excluding)
//document.write("b = " + b + "<br>");

//const c = Math.round(b); // gives round numbers if 3.4 then it will become 3 if 3.6 it will become 4
//document.write("c = " + c + "<br>");

//const d = Math.floor(b); // give round numbers but floors them 3.9 will become 3
//document.write("d = " + d + "<br>");

//const e = Math.ceil(b); // The opposite off floor 3.1 will become 4
//document.write("e = " +e + " <br>");

//const a = Math.random();
//document.write("a = " +a+ "<br>");
//const b = a*50
//document.write("From (excluding) too 0 (including) = " +b+"<br>");
//const c = Math.round(b);
//document.write("round =" +c+ "<br>")

//const d = 50 + c
//document.write("Random number from 50 too 60 =" +d+ "<br>")

//const amos = Math.floor(Math.random()*11) + 50
//document.write("Amos Gaming = " +amos+ "<br>")

//const min = 20
//const max = 30
//const gaming = Math.round(Math.random()*(max-min)) +min
//document.write("Gaming is = " +gaming+ "<br>")

// for some reason the teacher prefers using floor like this:


//const amosGaming = Math.floor(Math.random()*(max-min+1)) +min
//document.write("Amos Gaming= " +amosGaming+ "<br>")

//for (let i = 1; i <= 100; i++) {

//  const min = 20
// const max = 30
// const numRandom = Math.floor(Math.random()*(max - min +1))+ min
// document.write("Num " + i + "= " + numRandom + "<br>")
//}

//for (let a = 1; a <= 10; a ++){
//const maxNum = +prompt("Enter a number from 1 too infinity");
//if(maxNum < 1){alert("S2pid?");break;};
//const randomNum = Math.floor(Math.random()*(maxNum)) + 1;
//alert("Random number between 1 and the number you input: " + randomNum );
//}


for (let i = 1; i <= 10; i++) {

    const max = 50
    const randomNum = Math.floor(Math.random() * (max)) + 1;

    for (let min = 1; min <= randomNum; min++) { document.write(min + " ,") };

    document.write("<hr>")
}




