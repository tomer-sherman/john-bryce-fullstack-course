function paintPage(){
    paint(color=>document.body.style.backgroundColor = color)
}
function paint(func){
    func("yellow");
}