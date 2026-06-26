const n = +prompt("Enter a number: ");

let sum = 0
for(let i = 1 ; i < n; i++){
    document.write(i+ ",");
    sum += i;
}

const avg = sum / n;

document.write("<hr>");
document.write("sum = " + sum + " ,Average =" +avg);