// Complexity(in coding):
// time Complexity:

// the work of the CPU how much time aprox it takes the comp too finish this code.

// Space complexity:
// how much memory the code aprox will take from the computer.

// The point of this concept is too grasp the Order of magnitude.
// Or german: Ordnug

// So coders invented Big O Notation.
// The structure: O(Code) Space, or O(Code) time.

// There are a few O(of) time / space options.

// 1. 0(1) scape and time. look below
// 2. O(n) scape and time. look below




(function mainScript() {

    // 0(1) Space, and time
    // When you look macro at the code, there is a number of single vars. and this code happens only 1 time.
    document.getElementById("btn1").addEventListener("click", () => {
        displayValue(123);
    })

    function displayValue(value) {
        alert("The value is:" + value);
        alert("The is a cool function:");
    }
    //------------------------------------------------------
    // 0(n) Space and time
    document.getElementById("btn2").addEventListener("click", () => {
        const arr = [10, 20, 30, 40];
        displayArray();
    })

    //Space O(n);
    //Time O(n);

    function displayArray(arr) {
        for (const item of arr) {
            document.write(item + " ");
        }
    }

    //Space 0(n) -- you ask you self if in the algorithem you have have 1d arrays, NOT MATRIXES.- 
    // Time: 0(1)

    function displayItem(arr, index) {
        const value = arr[index];
        alert(`The value in index ${index} is: ${arr(index)}`)
    }

    //------------------------------------------------------------

    // O(n**2)
    document.getElementById("btn3").addEventListener("click", () => {
        const arr = [[10, 20, 30, 40, 11], [10, 20, 30, 40, 11], [10, 20, 30, 40, 11],]
        displayMatrix(matrix);
    })


    //------------------------------------------------------------

    // 0(n**2) space
    // O(n**2) time the algorithem runs n**2 cause its
    function displayMatrix(matrix) {
        for (const arr of matrix) {
            for (const item of arr) {
                document.write(item + " ,")
            }
            document.write("<br>")
        }
    }

    //-------------------------------------------------------------
    // Space: O(n)
    // Time: O(n)
    document.getElementById("btn4").addEventListener("click", () => {
        const arr = [10, 20, 30, 40];
        const value = 30;
        const index = search(arr, value);
        document.write(`value ${value} is in index: ${index}`)
    })

    function search(arr, value) {
        for (let i = 0 ; i < arr.length; i++) {
            if (arr[i] === value) {
                return i;
            }
        }
        return -1;
    }
    //------------------------

    document.getElementById("btn5").addEventListener("click", () => {
        const arr = [10, 17, 20, 30, 40, 50, 90];
        const value = 30;
        const index = binarySearch(arr, value);
        if (index >= 0) {
            document.write(`${value} ${index}`)
        } else { document.write$(`Value doesn't exist`) }
    })

    //Space O(n)
    //Time O(log n)
    function binarySearch(arr, value) { // Better sorting system.
        let start = 0, end = arr.length - 1; middle;
        do {
            // find middle:
            middle = Math.floor((start + end) / 2)

            // if found exaclty on the middle return.
            if (arr[middle] === value) {
                return middle;
            }

            // if value is smaller than middle value - take only left part.
            if (value < arr[middle]) {
                end = middle - 1;
                // else value is larger than middle - take only the right part.
            } else {
                start = middle + 1;
            }
        } while (start <= end);

    }

})();
