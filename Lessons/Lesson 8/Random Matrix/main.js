//creates empty matrix- actually when you think about it its just an empty array right now, the moment you place more then one arrays in it its a matrix.
const matrix = [];
// create random matrix:
for (let i = 1; i <= 10; i++) {
//create empty array:
    const array = [];
//add 20 random numbers too the array.
    for (let j = 1; j <= 20; j++) {
        const num = random(1,50);
        array.push(num);
    }
//add 10 times arrays. with 20 random numbers.
    matrix.push(array);
}



function random(min, max){
    return Math.floor(Math.random()*(max-min+1)) + min;
}

function displayMatrix(matrix) {
    for (let item of matrix) {
        document.write(item + "<br> ")
    }
};

displayMatrix(matrix);
