
const salary = prompt("Enter your salary: ");

// // קוד יחסית מורכב
// if (salary >= 20000) {
//     document.writeln("😊"); // WinKey + ץ
// }
// else {
//     if (salary >= 10000) {
//         document.writeln("😏");
//     }
//     else {
//         document.writeln("🥲");
//     }
// }


// קוד פשוט יותר
if (salary >= 20000) {
    document.writeln("😊"); // WinKey + ץ
}
else if (salary >= 10000) {
    document.writeln("😏");
}
else {
    document.writeln("🥲");
}

