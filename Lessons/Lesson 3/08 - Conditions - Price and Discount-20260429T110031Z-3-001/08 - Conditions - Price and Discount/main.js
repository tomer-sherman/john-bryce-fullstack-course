
const price = prompt("Enter your price: ");
const discount = prompt("Enter your discount: ");
const final = price * (1 - discount / 100);
document.writeln(`Final price: ${final}<br>`);

if(price < 1000 && discount > 20) {
    document.writeln("☺️");
}
else {
    document.writeln("😏");
}
