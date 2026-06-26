// A loop that runs on arrays and different kinds of other collection of information.

const grades = [123, 1231, 123123, 123123, 1231265, 123, 89];

// for i loop
for( let i = 0 ; i< grades.length; i++){
    document.write(grades[i] + "<br>")

}
document.write("<hr>")

//for - of loop
for(const item of grades){
    document.write(item+ "<br>")
}
document.write("<hr>")


const vegetables = [
  "Carrot",
  "Broccoli",
  "Spinach",
  "Tomato",
  "Cucumber",
  "Zucchini",
  "Bell Pepper",
  "Eggplant",
  "Asparagus",
  "Cauliflower"
];



for(const vegi of vegetables){
document.write(vegi +"<br>")
}



let sumLength = 0
for(const vagi of vegetables){
sumLength += vagi.length;
}
document.write("The total length: " +sumLength  +"<br>")


let longestVegi = ""
for(const vagi of vegetables){

     if(longestVegi.length < vagi.length){ 
        longestVegi = vagi};
}
document.write("The longest vegi is: " +longestVegi)
