function test1() {
   const result = f1(10,20,30);
   console.log("result: "+ result);
}

function f1(a,b,c) {
    console.log("f1", a,b,c);
    return 42;
}

//----------------------

function test2() {
    const value = f2; // you can take a function and hold it as a variable
    const result = value(10,20,30); // this calls the value, as f2 function.
    console.log("Result: "+ result);
  

}

function f2(a ,b ,c) {
    console.log("f2", a ,b, c);
    return 42;
}
//------------------------
function test3() {
    something(f3);
}

function f3(a , b , c) {
    console.log("f3",a ,b, c);
    return 42;
}

function something(func) {
    console.log(func);
    console.log(typeof func);
    const result = func(10 ,20 ,30);
    console.log("Result: " + result);
}
//-------------------------
function test4() {
    // Inline function
    doSomething1(function f4(a , b , c) { console.log("f4",a,b,c); return 42;});
}


function doSomething1(func) {
    console.log(func);
    console.log(typeof func);
    const result = func(10,20,30);
    console.log("result: "+ result);
}
//--------------------------

// Anonymous Function

function test5() {
    // Inline function without a name. airline function.
    doSomething((a,b,c)=> {console.log("f5", a,b,c); return 42;});
}


function doSomething(func) {
    console.log(func);
    console.log(typeof func);
    const result = func(10,20,30);
    console.log("Result"+ result);

}



