
function gradeFactor() {
    const grade = +prompt("Enter a grade:");

    if (grade > 100 || grade < 0 || isNaN(grade)) {
        throw new Error("Invalid grade")
    };
    const gFactor = Math.sqrt(grade) * 10;

    return {
        original: grade,
        curved: gFactor
    };
};

function displayFactor() {
    try {
        const result = gradeFactor();
        alert("Original Grade: " + result.original + "\nCurved Grade: " + result.curved.toFixed(2));
    }
    catch {
        alert("Grade can only be from 0 too 100");
    };

}