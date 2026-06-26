// const numArr = [20,30,40,50];

// function avgArr(array){
//     let sum = 0;
//     for(const numbers of array){
//         sum += numbers;
//     };
//     const avg = sum/array.length;
//     return avg;
// };

// const avg = avgArr(numArr);
// document.write("The avg is: " +avg)

// const numArr1 = [10,20,30,40,50,60,70,80,90,100];
// const numArr2 = [30,40,29,13,313,2,323,222,332,2];
// const numArr3 = [1,3,7,9,1,123,8354,3214,7,123,7];

// function findMinArr(array){
//     let min = Infinity;
//     for(const numbers of array){
//         if(min > numbers){min = numbers};
//     }
//     return min;
// };

// const min1 = findMinArr(numArr1);
// const min2 = findMinArr(numArr2);
// const min3 = findMinArr(numArr3);

// document.write(min1+",");
// document.write(min2+",");
// document.write(min3+",");


// const stringArr = ["amos gaming","amos gaming2","amos gaminngnginasasdasd"];

// function maxLengthArr(array){
//     let max = array[0];
//     for(const string of array){
//         if(max.length < string.length){max = string};
//     };
//     return max.length;
// };

// const maxSting = maxLengthArr(stringArr);
// document.write("The longest string is: " + maxSting)


// const numArr = [100,100,50,50,100];

// function findMinIndex(matrix){
//     let minI = 0
//     let min = array[0];
//     for(let i= 0 ; i < array.length; i++ ){
//         if(min > array[i]){
//             min = array[i];
//             minI = i};
//     };
//     return minI;
// };

// const minNumI = findMinIndex(numArr);
// document.write("The index is: " +minNumI);


// const numMatrix = [
//     [10,20,3045,203,20],
//     [30,2,321,365,8,667],
//     [21362,234,64568,2,4,6],
// ]

// function avgPls(matrix){
    

//    let sum = 0
//    let counter = 0
//     for(const arr of matrix){
//         for(const numbers of arr){
//           sum += numbers;
//           counter++;
//         }
//     }
//     const avg = sum/ counter;
//     return avg;
// }

// const avg = avgPls(numMatrix);
// document.write("The avg num is: " +avg);

function createRadomArr(i){

    const array = [];

    for(a = 1; a <= i; a++){
        const randomNum = Math.floor(Math.random()*(100-1+1)+1);
        array.push(randomNum);
    }
    return array;
};

const arr = createRadomArr(6);
document.write("The arr is: " +arr);
