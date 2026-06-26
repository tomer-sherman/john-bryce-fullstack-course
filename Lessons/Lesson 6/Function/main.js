// The point on a function is too minimize the amount of code you do, you can throw inside a function code and then, put the function whereever.
// Naming convention: Lower Camel

// function displayGreetings() {
//     document.write("Welcome!");
//     document.write("<hr>")
// }

// // Calling the function or invoking the function
// displayGreetings();
// displayGreetings();
// displayGreetings();

// function displayRandomNum() {
//     const min = 1
//     const max = 100
//     const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//     document.write("Random Number= " + randomNum + "<hr>")
// };

// for (i = 1; i <= 10; i++) {
//     displayRandomNum();
// }

// function displayCohavit() {
//     for (a = 1; a <= 10; a++) { document.write("* ,") };
// }

// for (i = 1; i <= 5; i++) {
//     displayCohavit();
//     document.write("<hr>")



// inside the function you can put in the () stuff for example

// function printMessage(message, times) {

//     times = +prompt("Enter the amount of times you wish the message will be sent.")
//     message = prompt("Enter the message you wish too print.")

//     for (let i = 1; i <= times; i++)
//         document.write(message + "<br>")

// }

// printMessage();

// function printLine(n){

// for(let i = 1 ; i <=n; i++){document.write("*");}
// };

// function printSquare(size){
// size = +prompt("Choose you size");
// for(let i = 1; i<= size; i++){
// printLine(size);
// document.write("<br>")
// }

// };



function triangle(size) {

    size = +prompt("Enter the base size of the triangle")

    for (let row = 1; row <= size; row++) {
        
        for (let col = 1; col <= row; col++) {
            document.write("*");
        
        };

        document.write("<br>")

    }

}

triangle();
