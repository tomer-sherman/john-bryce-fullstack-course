
const grades = [];
const notGrades = [];
let sum = 0 
for (i = 1; i <= 10; i++) {
    const grade = +prompt("Enter a number from 100-0");
    grades.push(grade);
    sum+= grade;
};
document.write(sum+"<hr>");



let invalidGrades = "These are the invalid grades: "
let allValid = true;
for (const grade of grades) {
    if (grade < 0 || grade > 100) { 
        invalidGrades+= grade +","
        notGrades.push(grade);
        allValid = false; }
};

if(allValid){document.write("All the grades are valid yay!!!!! <hr>")}
else{document.write(invalidGrades+"<hr>")};
const avg = sum / grades.length;













// const array = [];
// let sum = 0;

// for(i =1 ; i <= 100 ; i++){
//     const ranNum = Math.floor(Math.random()*(100-0+1)+0)
//     sum += ranNum;
//     array.push(ranNum);
//     document.write(ranNum+"<hr>")

// };
// const avg = sum/array.length;
// document.write("The sum is: "+sum+"<br>")
// document.write("The avg is: "+avg+"<br>")