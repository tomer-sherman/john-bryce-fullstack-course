const kittens = [
    { name: "mitsi", age: 4, color: "black" }, // obj 0
    { name: "Cyber", age: 5, color: "black" }, // obj 1
    { name: "Oscar", age: 6, color: "gray" } // obj 2
];

function printKittens(kittens) {
    for (const obj of kittens) {
        document.write("Name: " + obj.name + "<br>")
        document.write("Age: " + obj.age + "<br>")
        document.write("Color: " + obj.color + "<hr>")

    }
};

const fruits = [
    { name: "Apple", price: 3, count: 45 },
    { name: "Banana", price: 2, count: 62 },
    { name: "Orange", price: 4, count: 18 },
    { name: "Strawberry", price: 5, count: 33 }
];

function printFruits(fruits) {
    for (const obj of fruits) {
        document.write("Name: " + obj.name + "<br>")
        document.write("Price: " + obj.price + "<br>")
        document.write("Count: " + obj.count + "<hr>")
    }

}
printFruits(fruits);


function calcSum(fruits) {
    let sum = 0
    for (const obj of fruits) {
        sum += obj.price
    }
    return sum;
}


function calcAvg(fruits){
    const sum = calcSum(fruits);
    const avg = sum/fruits.length;
    return avg;
};

document.write("The avg of all the items is: " + calcAvg(fruits)+"<hr>")

function sortAmount(fruits){
    let count = 0;
    for(const obj of fruits){
        count += obj.count;
    }
    return count;
};

document.write("The fruit count is: " +sortAmount(fruits)+"<hr>")