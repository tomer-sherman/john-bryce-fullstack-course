function test1() {
    f1(10,20,30);
}

function f1(a,b,c) {
    console.log("f1", a,b,c);
}

//----------------------

function test2() {
    const value = f2; // you can take a function and hold it as a variable
    value(10,20,30); // this calls the value, as f2 function.
}

function f2(a ,b ,c) {
    console.log("f2", a ,b, c);
}
//------------------------
function test3() {
    something(f3);
}

function f3(a , b , c) {
    console.log("f3", a,b,c);
}

function something(func) {
    console.log(func);
    console.log(typeof func);
    func(10 ,20 ,30);
}
//-------------------------
function test4() {
    // Inline function
    doSomething1(function f4(a , b , c) { console.log("f4",a,b,c)});
}


function doSomething1(func) {
    console.log(func);
    console.log(typeof func);
    func(10,20,30);
}
//--------------------------

// Anonymous Function

function test5() {
    // Inline function without a name. airline function.
    doSomething((a,b,c)=> console.log("f5", a,b,c));
}


function doSomething(func) {
    console.log(func);
    console.log(typeof func);
    func(10,20,30);

}



