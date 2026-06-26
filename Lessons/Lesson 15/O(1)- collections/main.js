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

    document.getElementById("btn1").addEventListener("click", () => {

        const items = new Set();

        items.add("Apple");
        items.add("Banana");
        items.add("Peach");
        items.add("Apple");
        items.add("Apple");
        items.add("Orange");
        items.add("Apple");
        items.add("Apple");

        console.log(items);

        // Set an Object(set) that you can add items too it,
        // it doesn't have mulitple items with the same value


        if (items.has("Banana")) {
            console.log("We have bananas")
        } else {
            console.log("We don't have grapes")
        }

        // This set. has (has) a special algorithem that converts the, items value into an index. thats why you dont have 2 items with the same value.
        // it saves a bunch of time.



    }
    )
    document.getElementById("btn2").addEventListener("click", () => {

        // Map an object,
        // you cannot add 2 keys, with the same name,
        // its like set but it works more like an object, less like an array.
        const items = new Map();

        items.set(20,"Apple");
        items.set(9,100 ,"Grape");
        items.set(9,300 ,"Apple");
        items.set(200,"Apple");
        items.set(500,"banana");
        items.set(9,"Apple");
        

        if(items.has(200)){
            console.log("We have key 200"+ items.get(200))
        }else{
            console.log("We don't have key 200")
        }

        console.log(items);

        

    }
    )





})();
