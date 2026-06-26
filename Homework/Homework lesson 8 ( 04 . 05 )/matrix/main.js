const matrix = [[12, 23, 34, 45], [56, 67, 78, 89], [10, 20, 30, 40]];

document.write(matrix+"<hr>");

let sum = 0;
let matrixLength = 0;
for(const arr of matrix){
    for(const numbers of arr){
        sum += numbers
        matrixLength++
    }
};
const avg = sum/matrixLength
document.write("The sum is = " +sum+"<br>");
document.write("The avg is = " +avg+"<br>");
document.write("<hr>")

let min = +Infinity;
for(const arr of matrix){
    for(const numbers of arr){
        if(min > numbers){min=numbers}
    };
};

document.write("The min num is= "+min+"<br>" );

let max = -Infinity;
for(const arr of matrix){
    for(const numbers of arr){
        if(max < numbers){max=numbers}
    };
};

document.write("The max num is= "+max+"<hr>" );

for(const arr of matrix){
    for(const numbers of arr){
       if(numbers % 7 === 0){document.write(numbers+" ")}
       else{document.write("👌")}
    };
};
document.write("<hr>");

const products = [
 ["Onion", "Carrot", "Tomato", "Cucumber"],
["Apple", "Banana", "Peach", "Grapes", "Orange"],
 ["Wheat", "Flour"]
]

document.write(products+"<hr>");

let minLength = products[0][0].length;
for(const arr of products){
    for(const items of arr){
        if(minLength.length > items.length){minLength = items.length}
    }
};
document.write("The min lengh is: " +minLength+"<hr>");

let minStringArr = [];

for(const arr of products){
    for(const items of arr){
       if(minLength === items.length){minStringArr.push(items)}
    }
};

document.write(minStringArr);
