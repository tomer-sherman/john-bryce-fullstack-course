
// const car1 = {
//     model: "Tesla Model 3",
//     year: 2022,
//     color: "White"
// };

// const car2 = {
//     model: "Mazda 3",
//     year: 2020,
//     color: "Red"
// };

// const car3 = {
//     model: "Toyota Corolla",
//     year: 2024,
//     color: "Silver"
// };


// const carsArray = [car1, car2, car3];


// console.log(carsArray);

// for(const cars of carsArray){
//     document.write("Color: "+ cars.color+"<br>")
//     document.write("Years: "+cars.year+"<br>")
//     document.write("Model: "+cars.model+"<br>")
//     document.write("<br><br>")
// }

// document.write("<hr>");

// for(const cars of carsArray){
//     for(const keys in cars){
//         document.write(keys +": "+ cars[keys]+"<br>")
//     }
// };

const clothes = [
    {
        type: "T-Shirt",
        size: "M",
        color: "Blue",
        price: 80
    },
    {
        type: "Jeans",
        size: "42",
        color: "Black",
        price: 200
    },
    {
        type: "Hoodie",
        size: "L",
        color: "Grey",
        price: 150
    },
    {
        type: "Socks",
        size: "One Size",
        color: "White",
        price: 20
    },
    {
        type: "Jacket",
        size: "XL",
        color: "Dark Blue",
        price: 350
    }
];


console.log(clothes);

for(const object of clothes){
    for(const keys in object){
        document.write(keys+ ": " + object[keys]+"<br>")
        
    }
    document.write("<hr>")
};