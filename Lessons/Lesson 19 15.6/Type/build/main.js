const numbers = [10, 20, 30, 40];
function printArray(arr, options) {
    document.body.innerHTML += `${options.header} <br>`;
    for (const item of arr) {
        document.body.innerHTML += item + options.delimiter;
    }
    if (options.newLine) {
        document.body.innerHTML += "<br>";
    }
}
// You use type too In order Too NOT DRY, don't reapet yourself twice.
const option1 = { header: "Grades", delimiter: "|", newLine: true };
printArray(numbers, option1);
const option2 = { delimiter: "|" };
printArray(numbers, option2);
export {};
