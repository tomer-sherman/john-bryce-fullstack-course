function test1() {
   doSomething1(()=> {console.log("f1");
    console.log("f123123");
   })
}

function doSomething1(func) {
  func()
}
//--------------------------------------------
function test2(){
    // arrow with only one command
    doSomething2(()=> console.log("f2"));
}

function doSomething2(func){
    func();
}
//--------------------------------------------

function test3(){

doSomething3((a,b,c)=> console.log("f3" , a,b,c));

}

function doSomething3(func){
    func(10,20,30)
}
//--------------------------------------------
function test4(){
// arrow that gets only one argument you can remove the ()
doSomething4(a => console.log("f4", a));

}

function doSomething4(func){
    func(10)
}
//--------------------------------------------
function test5(){
doSomething5(a => {console.log("f5", a)
    return 42;
});

}

function doSomething5(func){
   const result = func(10);
   console.log("result: " + result);
}
//--------------------------------------------
function test6(){
doSomething6(a => {return a + 42}); //return has too be surrounded by brackets {}

}

function doSomething6(func){
   const result = func(10);
   console.log("Result = " + result);
}