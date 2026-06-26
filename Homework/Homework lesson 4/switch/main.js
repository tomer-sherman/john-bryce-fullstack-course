const monthDay = parseInt(prompt("Enter a number between 1-12 that represents a month"))

switch(monthDay){
    case 12:
    case 1:
    case 2:
    case 3:
    document.writeln("It is winter yayyy!!!")
    break;
    case 4:
    case 5:
    document.writeln("It is spring yayy!!!!")
    break;
    case 6:
    case 7:
    case 8:
    case 9:
    document.writeln("It is summer yay!!")
    break;
    case 10:
    case 11:
    document.writeln("It is autumn yayyy!!!!")
    break;
    default:
    document.writeln("Invalid answer")
};
