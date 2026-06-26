// A function, that calls her self inside a function, it then continues, It awaits its own completion then goes on.
"use strict";
(function mainScript() {

    


    document.getElementById("btn1").addEventListener("click", () => {
       // 0, 1, 1, 2, 3, 5, 8 ,13 ,21 ,34 ,55 ....
        
       const index = +prompt("enter fibonachi index");
       const value = getFibonachiValue(index);

       alert(`Fibonachi index ${index} value is ${value}`);


    })

    // A not recursion way
   function getFibonachiValue(index){

        let first = 0;
        let second = 1;
        let next;

        for(let i = 3; i <= index; i++){
             next = first + second
             first = second
             second = next 
        }
        return next;


   }

   //A recursive way
   // 0, 1,1,2,3,4,8,13,21,34,55...

   
   function getFibonachiValueRec(index){
    if(index === 1){
        return 0;
    }
    if(index === 2){
        return 1;
    }

    return getFibonachiValueRec(index -2) + getFibonachiValueRec(index -1);


   }
   // Go over it ONCE MORE, this time graph.
   
   // Build a recursion Hanoi towers site.









})();