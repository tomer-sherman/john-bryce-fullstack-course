function displayName(fullname) {
    document.write("My name is: " + fullname)
}

function callback1(callback) {
    callback();
}

callback1(()=>displayName("Amos Gaming")); 
document.write("<hr>")
//---------------------------------------

function cool(callback) {
    callback();
}

cool(num => {
    num = Math.floor(Math.random() * 100 - 0 + 1) + 1;
    document.write("The random num is: " + num)
})
document.write("<hr>")
//---------------------------------------
function nice(callback) {
	callback(42);
}

nice(num=> document.write("The num is: " + num))
document.write("<hr>")
//---------------------------------------

function amazing(callback) {
	const num = callback(42, 128, 37, 81, 66);
	document.writeln("Num: " + num);
}

amazing((a, b , c, d ,e) => {
    const index = Math.floor(Math.random()*(4-1+1))+1;
    const options = [a, b , c, d ,e];

    return options[index];
})

document.write("<hr>")
//---------------------------------------



function cool(paintCallback) {
	paintCallback("black", "green","yellow","blue","brown");
}

cool((a , b, c, d, e) => {
    const index = Math.floor(Math.random()*(4-1+1))+1;
    const options = [a , b, c, d, e];
   // document.body.style.backgroundColor = options[index];
    return options[index];})

document.write("<hr>")
//---------------------------------------

function nice1(paintCallback) {
	paintCallback("Green");}

   // nice1(color => document.body.style.backgroundColor = color)

   document.write("<hr>")
//---------------------------------------

function amazing1(paintCallback) {
	const paintedColor = paintCallback("Red", "Green", "Blue");
	document.writeln("Painted Color: " + paintedColor);
    document.body.style.backgroundColor = paintedColor;
}

amazing1((color1 , color2, color3) => {
    const index = Math.floor(Math.random()*(2-0+1)+0);
    const options = [color1 , color2, color3];

    return options[index];})


//---------------------------------------







