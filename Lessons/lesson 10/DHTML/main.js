
// get data and display it in separate functions!!

// Create an array in the main script!! cause if you create it in the function it only lives inside it.
let allBooks = [];

function sendBook() {

    // Get boxes:
    const nameBox = document.getElementById("nameBox");
    const descriptionBox = document.getElementById("descriptionBox");
    const priceBox = document.getElementById("priceBox");

    // Extract Data:
    const name = nameBox.value;
    const description = descriptionBox.value;
    const price = +priceBox.value;

    //Always check if the code works!!
    console.log(name, description, price);

    // Create one book object:
    const book = { name, description, price };

    // Push the book inside the array of all books.
    allBooks.push(book);


    //Displays all books.
    displayBooks();

    //Save all books.
    saveAllBooks();

    //Clear form
    clearForm();

};


// display all books
function displayBooks() {

    // Get table body
    const tableBody = document.getElementById("tableBody");

    //Clear previous display
    tableBody.innerHTML = "";

    // Display all books
    for (const book of allBooks) {

        //Create one row:
        const tr = `
        <tr>
            <td>${book.name}</td>
            <td>${book.description}</td>
            <td>${book.price}</td>
        </tr>
        `;
        // add too inner table
        tableBody.innerHTML += tr;
    };
};


// Save All books too local storage.
function saveAllBooks() {
    const jsonString = JSON.stringify(allBooks);
    localStorage.setItem("all-books", jsonString);
};

//load books from storage!
function loadAllBooks() {
    const jsonString = localStorage.getItem("all-books");
    if(jsonString){
    allBooks = JSON.parse(jsonString);};
};

// Load all books from storage back to display:
function loadAndDisplayAllBooks() {
    loadAllBooks();
    displayBooks();
};
// Clear form function.
function clearForm(){
    const bookForm = document.getElementById("bookForm");
    bookForm.reset();
};

function clearAllStorage(){
localStorage.removeItem("all-books");
allBooks = [];
displayBooks();
};