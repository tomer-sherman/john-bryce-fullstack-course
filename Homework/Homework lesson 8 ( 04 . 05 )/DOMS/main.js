function dosomething() {
    const numBox = document.getElementById("numBox");
    const num = +numBox.value;
    const num3 = num ** 3;

    alert(`The number you wrote **3 is: ${num3}`);
    numBox.style.backgroundColor = "green";

};

function calc(action) {

    // Get Data
    const numBox1 = document.getElementById("numBox1");
    const numBox2 = document.getElementById("numBox2");
    const numBox3 = document.getElementById("numBox3");

    // Extract Data

    const num1 = +numBox1.value || 0;
    const num2 = +numBox2.value || 0;
    const num3 = +numBox3.value || 0;

    // Calc data

    if (action === 'sum') {
        const sum = num1 + num2 + num3;
        alert(`The sum is: ${sum}`);
    }
    else if (action === 'avg') {
        const sum = num1 + num2 + num3;
        const avg = sum / 3;
        alert(`The avg is: ${avg}`);
    }

};

function mail() {
    const mailBox = document.getElementById("mailBox");
    const email = mailBox.value.toLowerCase();

    if (email.endsWith("@gmail.com")) { alert("Your e-mail is: " + email) }
    else { alert("INVALID EMAIL!!!") };

};

function fullname() {

    // Get data;
    const firstNameBox = document.getElementById("firstNameBox");
    const lastNameBox = document.getElementById("lastNameBox");

    // Extract data
    const fullName = firstNameBox.value + " " + lastNameBox.value;

    // Action

    if (firstNameBox.value === "") {
        alert("You did not write a first name S2pid!!")
    }
    else if (lastNameBox.value === "") {
        alert("You did not write a last name S2pid!!")
    }
    else if (lastNameBox.value === "" && firstNameBox === "") {
        alert("You did not write anything dumbass!!");
    }
    else { alert("Your fullname is: " + fullName) };

};

function email() {
    const emailBox = document.getElementById("emailBox");
    const span = document.getElementById("emptySpan")
    const email = emailBox.value;


    if (email.endsWith("@gmail.com")) {
        alert("Your email is" + email);
    }
    else {
        span.innerText = "ERROR ARIEL IS FAT!!";
        span.style.backgroundColor = "red";
    };

};

function hoverOn(btn) {
    // 'btn' is whichever button your mouse is over
    btn.style.backgroundColor = "red";
    btn.style.color = "black";
};
function hoverOff(btn) {
    // 'btn' is whichever button your mouse just left
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
};