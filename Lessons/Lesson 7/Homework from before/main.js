function randomNumber(start, end) {
    const randomNum = Math.floor(Math.random() * (end - start + 1)) + start;
    document.write(randomNum + "<br>")
}
function gundomNumber(start, end) {
    start = +prompt("Enter a minimal number");
    end = +prompt("Enter a maximal number");
    randomNumber(start, end);

}




function gundomRandomNum(start, end) {

    for (i = 1; i <= 100; i++) {
        randomNumber(-10, +10);
    }
}

gundomRandomNum();