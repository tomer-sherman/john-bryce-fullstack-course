let cars = [];
function sendCar() {

    // Get boxes
    const carTypeBox = document.getElementById("carTypeBox");
    const manufactureBox = document.getElementById("manufactureBox");
    const priceBox = document.getElementById("priceBox");

    // Extract data
    const carType = carTypeBox.value;
    const manufacture = manufactureBox.value;
    const price = +priceBox.value;

    //Checking data
    console.log(carType, manufacture, price);


    // Create an object
    const car = { carType, manufacture, price };

    // Push object inside the cars array
    cars.push(car);

    // display cars on the table below
    displayCarsTable();

    // Saves in local storage
    saveAllCars();
}

function displayCarsTable() {
    // Get table body
    const tableBody = document.getElementById("tableBody");

    //Clear previous display
    tableBody.innerHTML = "";

    for (const car of cars) {

        //Create one row in the table:
        const tr = `
    <tr>
    
        <td>${car.carType}</td>
        <td>${car.manufacture}</td>
        <td>${car.price}</td>

    </tr>`;

        // add too inner table
        tableBody.innerHTML += tr;
    };
}

function saveAllCars() {
    const jsonString = JSON.stringify(cars);
    localStorage.setItem("all-cars", jsonString);
}

function loadCars(){
    const jsonString = localStorage.getItem("all-cars");
    if(jsonString){
        cars = JSON.parse(jsonString);
    }
}
function loadAndDisplayCars(){
     loadCars();
     displayCarsTable();
}

function clearForm(){
    const carForm = document.getElementById("carForm");
    carForm.reset();
};

function clearAllStorage(){
    localStorage.removeItem("all-cars");
    cars = [];
    displayCarsTable();
}
