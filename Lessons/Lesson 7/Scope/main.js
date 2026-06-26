// A scope it - a scope of recognition.
// There are a few SCOPES in coding.
// Look at 2 of them:

// Global scope: - Lives inside the main script as long is the script.

let a = 10;
console.log("a: " + a);

function doSomething() {
    console.log("a: ", a); // The Var A lives everywhere, even inside functions and loops etc.


    // Local Scope: - Lives inside Functions/ IT DOES NOT LIVE IN THE MAIN SCRIPT.
    const b = 20
    console.log("b: ", b);


    // Block Scopes: - Lives inside Loops If Objects etc.
    if (Math.random() < 0.5) {
        const c = 30;
        console.log("c: ", c);
    }
    console.log("c: ", c); // This will not work cause LET or CONST live only inside the block you wrote them in/ if let or const were outside of the block of the if somewhere inside the function.
    // This command would work.
    // However since its still inside the function it would not work in the main script.

}

doSomething();
console.log("b: ", b); // you cannot console log it after the function cause in this case B lives only inside the function.

// Hoisting - pushing up the code up // for it too show up on the top of the scope you made.
// If i defined var inside the if in the function- it will hoist the var too the top of the function making it an undefined object on the top. thus creating, possible problems. NEVER USE VAR