const inventory = [
    ["Onion", "Carrot", "Tomato", "Cucumber"],
    ["Apple", "Banana", "Peach", "Grapes", "Orange"],
    ["Wheat", "Flour"],
];

function displayMatrix(matrix) {
    for (const arr of matrix) {
        for (const item of arr) {
            document.write(item + ", ")
        }
        document.write("<br>");
    }
    document.write("<hr>")
}
displayMatrix(inventory);

function findMax(matrix) {
    let temp = ""
    let maxLength = 0
    for (let arr of matrix) {
        for (let item of arr) {
            if (temp.length < item.length) { temp = item };
          
        }
    }
    return temp;
};

const maxStr = findMax(inventory);
document.write("The max str is: " +maxStr);

// Exercise 2

const multiTable = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
  [4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
  [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
  [6, 12, 18, 24, 30, 36, 42, 48, 54, 60],
  [7, 14, 21, 28, 35, 42, 49, 56, 63, 70],
  [8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
  [9, 18, 27, 36, 45, 54, 63, 72, 81, 90],
  [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
];

function validateMultiTable(matrix) {
   for(i = 0 ; i < matrix.length ; i++){
    for(let j = 0 ; j < matrix[i].length; j++)
    {if((i+1)*(j+1) !== matrix[i][j]){return false;}}
   }
   return true;
}
function validateMultiTableDiff(matrix) {
   for(let arr of matrix){
    for(let num of matrix){
        if(arr*num !== matrix[arr][num])
    }
   }
}
