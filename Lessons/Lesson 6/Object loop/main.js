const phoneId = {
    manufacturer: "Sumsung",
    model: "X3",
    price: 50,
    screenSize: "8inch",
};

// for in loops:
//Display field names:

for(const fieldName in phoneId){
    document.write(`${fieldName}<br>`)

};

document.write("<hr>");
//Display field values:

for(const fieldName in phoneId){
    document.write(`${phoneId[fieldName]}<br>`);
}

document.write("<hr>");
//Display both name and value.

for(const fieldName in phoneId){
    document.write(`${fieldName}: ${phoneId[fieldName]}<br> `)
};

document.write("<hr>");

const rectangle ={

height: 10,
width: 5,
color: "black",
};

for(const fieldName in rectangle){
    document.write(`${fieldName} : ${rectangle[fieldName]} <br>`)
}