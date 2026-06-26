(function () {
    // Hard coded array
    const consoles = ["nintendo switch", "pc", "ps5", "ps6", "steam deck", "xbox series x"];

    // binarySearch Function that returns either the index or false
    function binarySearch(arr , userInput){

        
         // start = 0 the first index 
         // end = arr.length since the we work on indexes
        let start = 0, end = arr.length-1;
       
        // The moment start is bigger then end it exits the function
        // i cannot put something else inside the condition , cause a user can put a string that doesn't exist in the array
        //cause if i do it will run infinite, crashing the system
       while(start <= end){
     
        // Dynamically changes the middle point
        let middle = Math.floor((start+end)/2);

        // if it hits the exact middle it returns The index
        if(userInput === arr[middle])
            {return middle}

        // If it doesn't it evaluates where the user input is, 
        // at the the left side or right side of the array.
        if(userInput < arr[middle]){
            // if the user input is smaller then middle string
            // it moves the end point too the middle -1 since the middle point is not where what we seek is
            end = middle-1
        }else{
            // same but too the start point
            start = middle+1
        }

       }

       // returns -1 if it exits the Loop
       // cause if  its false, the if(index !== -1) statement will be true
       // It happens only if the index wasn't found making the start point bigger then the end!!
       return -1;

    }

    const userInput = prompt("Enter a name of a console").toLocaleLowerCase();
    const index = binarySearch(consoles, userInput);

    // Be careful using indexes in a bolean function, since 0 = false!!! , i forgot about the BANANA
    if(index !== -1){
        alert("The console you wrote exist and its in index: " +index)
    }
    else{
        alert("The console you wrote doesn't exist")
    }

   

    // O( log n) time since its a binary search and its cutting n in half every time its faster then O(n)
    // O(n) space since the code has an array
  
   
})();
