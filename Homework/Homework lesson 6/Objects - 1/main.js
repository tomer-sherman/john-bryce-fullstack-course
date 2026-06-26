const worker = {
    Name: "Sharmut",
    Salary: "0$",
    Job: "slave"
};

console.log(worker);

for (const key in worker) {
    document.write(key + ": " + worker[key] + "<br>")
    // key name   /// key value
}
const creditCard = {
    creditNumber: 69,
    CVV: 121,
    creditScore: 0
}

for (const key in creditCard) {
    document.write(key + ": " + creditCard[key] + "<br>")
}
document.write("<hr>")

const customer = {
    Name: "Amos",
    location: {
        City: "Ekron",
        Street: "Gaynes"
    },
    phoneNumber: "054321",
}
console.log(customer);

for (const key in customer) {
    if (typeof customer[key] === "object") {
        // Show the parent key (e.g., location)
        document.write(key + ": " + "<br>");
        
        for (const subKey in customer[key]) {
            // Show the nested keys with a dash for clarity
            document.write("-- " + subKey + ": " + customer[key][subKey] + "<br>");
        }
    } else {
        // Show the normal keys (e.g., Name, phoneNumber)
        document.write(key + ": " + customer[key] + "<br>");
    }
}