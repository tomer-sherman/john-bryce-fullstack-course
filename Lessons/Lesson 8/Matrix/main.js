// Matrix a 2 dimensional(2d) array. it is constructed by 2 or more arrays. every array is a cell in the array.
// Good for tabled information.

const matrix = [ // matrix.length = 4
    [10, 20, 30, 40], // matrix[0].length = 4
    [11, 22, 33, 44], // matrix[1].length = 4
    [100, 200], // matrix[2].length = 2
    [9, 8, 7, 6, 5, 4, 3] // matrix[3].length = 7
];

function displayMatrix(matrix) {
    for (let item of matrix) {
        document.write(item + "<br> ")
    }
};

displayMatrix(matrix);


function matrixSum(matrix) {
    let sum = 0;
    for (let arr of matrix) {
        for (let item of arr) { sum += item; };

    }

    return sum;
}
document.write("The matrix sum is: " + matrixSum(matrix) + "<br>");

function calcMatrixAvg(matrix) {
    let length = 0;
    for (let arr of matrix) {
        length += arr.length
    }
    const avg = matrixSum(matrix) / length;
    return avg;
};

document.write("The matrix avg is:" + calcMatrixAvg(matrix).toFixed(2) + "<br>")

function matrixMaxNum(matrix) {
    let temp = 0;
    for (let arr of matrix) {
        for (let item of arr) { if (temp <= item) { temp = item }; };

    }

    return temp;
}
document.write("The max num of the matrix is:" + matrixMaxNum(matrix) + "<br>")

function matrixMinNum(matrix){
    let min = matrix[0][0];
    for(let arr of matrix){
        for(let item of arr){
            if(min > item){min = item};
        }
    }
    return min
}

    document.write("The min num is: " + matrixMinNum(matrix) + "<br>")