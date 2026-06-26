(function () {

// Creates a matrix
    const matrix =[];


// Adds 10x10 random numbers too the matrix
    for(let row = 0 ; row < 10; row++){
        matrix[row] = [];

        for(let col = 0; col < 10; col++){
            const num = Math.floor(Math.random()*101)
            matrix[row].push(num);
        }
    }

    // alerts the avg
    alert("The avg is: " + calcAvg(matrix))

    // calcs the avg of the matrix
    function calcAvg(matrix){
        // let numCounter = 0
        // let sum = 0
        // for(const arrRow of matrix){
        //     for(const num of arrRow){
        //         sum += num
        //         numCounter++
        //     }
        // }

        // const avg = sum / numCounter
        // return avg;

        // A more clean version !! use this
        let sum = 0
        let counter = 0

        // You have too use a fore each inside a for each since its a matrix with arrays in it.
        matrix.forEach(arr => {
            arr.forEach(num=>{
                sum +=num
                counter++
            })
           
        });

        const avg = sum/counter;
        return avg;

    }

    //O(n**2) Space since we have a matrix of arrays
    //O(n**2) Since we do a nested loop that calcs, all the numbers in the matrix.
    // if it was an Array of object it would have been O(n) since the number of items in the object is fixed 



   
})();
