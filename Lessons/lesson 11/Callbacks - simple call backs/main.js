function test1() {
    f1();
}

function f1() {
    console.log("f1");
}

//----------------------

function test2() {
    const value = f2; // you can take a function and hold it as a variable
    value(); // this calls the value, as f2 function.
}

function f2() {
    console.log("f2");
}
//------------------------
function test3() {
    doSomething(f3);
}

function f3(message) {
    console.log(message);
}

function doSomething(func) {
    console.log(func);
    console.log(typeof func);
    func("Hello");
}
//-------------------------
function test4() {
    // Inline function
    doSomething(function f4() { console.log("f4"); });
}


function doSomething(func) {
    console.log(func);
    console.log(typeof func);
    func();
}
//--------------------------

// Anonymous Function

function test5() {
    // Inline function without a name. airline function.
    doSomething(()=> console.log(randomNum(1,5)));
}


function doSomething(func) {
    console.log(func);
    console.log(typeof func);
    func();
}

function randomNum (min, max){
   const num = Math.floor(Math.random()*(max-min+1)+1)
   return num;
}

