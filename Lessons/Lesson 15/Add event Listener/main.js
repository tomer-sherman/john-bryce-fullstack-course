
// The windows Object.
// all of the infrastructure of JS sits inside this object.
// If you create any function anywhere, it sits inside the Window object.

// There is 1 Way too solve this, put a function, and inside it All the functions.
//

function scriptLevelFunction(){


    const firstTestBtn = document.getElementById("firstTestBtn");
    firstTestBtn.addEventListener("click", test)
    


function test(){
    alert("test")
}









}

scriptLevelFunction();
