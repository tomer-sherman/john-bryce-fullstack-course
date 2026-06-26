// const kitten = {
//     name: "Mitsi",
//     age: 2,
//     color: "white"
// };

// console.log(kitten)
// document.write(kitten +"<hr>")

// // Convert object into JSON string:
// let jsonString = JSON.stringify(kitten);
// console.log(jsonString);
// document.write(jsonString+"<hr>")
// //Convert JSON string too an object
// let dupKitten = JSON.parse(jsonString)
// console.log(dupKitten);
// document.write(dupKitten+"<hr>");



const kittens = [
    {name: "mitsi", age: 2, color: "white"},
    {name: "Cyber", age: 2, color: "white"},
    {name: "Oscar", age: 2, color: "white"},
]

const jsonString = JSON.stringify(kittens);
document.write(jsonString+"<hr>")

const dupKittens = JSON.parse(jsonString);
document.write(dupKittens+"<hr>")