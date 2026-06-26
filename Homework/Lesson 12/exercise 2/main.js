const pizzas = [];

for (let i = 0; i < 20; i++) {

    const diameter = Math.floor(Math.random() * (45 - 20 + 1)) + 20;   
    const slices = Math.floor(Math.random() * (8 - 4 + 1)) + 4;       
    const toppings = Math.floor(Math.random() * (5 - 0 + 1)) + 0;     
    const price = Math.floor(Math.random() * (90 - 40 + 1)) + 40;     

    const pizza = {
        diameter: diameter,
        slices: slices,
        toppings: toppings,
        price: price
    };

    pizzas.push(pizza);
}

const piss = pizzas.forEach(pizza=>{
    
    for(const key in pizza){
        document.write(key +": "+ pizza[key]+" ,")
}
document.write("<br>")

});
document.write("<hr>")

const nonPizza = pizzas.find(pizza => +pizza.toppings === 0)
document.write(JSON.stringify(nonPizza));

document.write("<hr>")

const cheapPizza = pizzas.find(pizza => pizza.price< 60);
document.write(JSON.stringify(cheapPizza));

document.write("<hr>")

const smallPizzas = pizzas.filter(pizza => pizza.diameter <=30).forEach(pizza=>document.write(JSON.stringify(pizza) +"<br>"));

document.write("<hr>")

const expPizzas = pizzas.filter(pizza => pizza.price >= 70).forEach(pizza=>document.write(JSON.stringify(pizza) +"<br>"));

document.write("<hr>")

const indexPizza = pizzas.findIndex(pizza=> pizza.slices === 6);
document.write("The index is: " +indexPizza);

document.write("<hr>")

const radious = pizzas.forEach(pizza => document.write(`The radious is: ${pizza.diameter / 2} `));

document.write("<hr>")

const pizzasWithVat = pizzas.map(pizza => ({
    price: pizza.price,
    vat: pizza.price * 0.17
}));
