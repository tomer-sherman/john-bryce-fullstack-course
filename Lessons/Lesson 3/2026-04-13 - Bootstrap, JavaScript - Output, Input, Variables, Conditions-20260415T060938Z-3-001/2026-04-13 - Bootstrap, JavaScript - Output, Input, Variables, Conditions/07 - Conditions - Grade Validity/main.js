const grade = prompt("Enter your grade: ");

// // קוד מורכב יחסית
// if (grade < 0) {
//     document.writeln("Illegal grade.");
// }
// else if (grade > 100) {
//     document.writeln("Illegal grade.");
// }
// else {
//     document.writeln("Legal grade.");
// }


// && קוד פשוט יותר המשתמש באופרטור
if (grade >= 0 && grade <= 100) {
    document.writeln("Legal grade.");
}
else {
    document.writeln("Illegal grade.");
}
