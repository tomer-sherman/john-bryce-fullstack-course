(async function () {
    // Hard coded array
    const fruits = ["Banana", "Watermelon", "Apple", "Mango", "Cherry"];

    // search function that gets an array and userInput arguments
    function searchArr(arr, userInput) {

        // A promise object, that returns resolve or reject
        return new Promise((resolve, reject) => {
            // Seeks the index of userInput
            const index = arr.findIndex(fruit => fruit === userInput)
            if (index !== -1) {
                // Return name and position. {You return 2 values using this method}
                resolve({ name: arr[index], position: index })
            }
            else {
                reject(new Error("Fruit not found"));
            }


        })
    }

    try {

        const userInput = prompt("Enter a fruit name");
        // Used await since its a promise and it forces async and await
        const result = await searchArr(fruits, userInput)
        alert("Your fruit is exist!! : " + result.name + " The index is: " + result.position);

    } catch (err) {
        alert(err.message);
    }

    // O(n) time since it is depended on the amount of items in the array
    // O(n) space since we have an array in this system

})();
