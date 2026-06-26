
function graphicScriptLevelFunction(){

    const drawBtn = document.getElementById("drawBtn");
    const secondTestBtn = document.getElementById("secondTestBtn");
    drawBtn.addEventListener("click", draw)
    secondTestBtn.addEventListener("click", test)


function draw(){
    document.body.innerHTML += "Drawing something..."
}



function test(){
    alert("Test some graphic");
   
}










}

graphicScriptLevelFunction();

