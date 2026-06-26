function display1() {
    getRandomNumAfterDelay1(
        1, 100,
        num => document.body.innerHTML += num + "<br>",
        err => alert(err.message))
}

function getRandomNumAfterDelay1(min, max, callback, failCallback) {

    setTimeout(() => {
        const num = Math.floor(Math.random() * (max - min + 1) + min);

        // demo crash
        if (Math.random() < 0.3333) {
            const err = new Error("Some error...");
            failCallback(err);
        }
        else {
            callback(num);
        }

    }, 1000);

}
//----------------------------------------------------
// Promise, an JS object that is its purpose is too run an Asynchronized code, and send Fail or Succsess.
// It changes the Code structure.

function display2() {

    getRandomNumAfterDelay2(1, 100)
        .then(num => document.body.innerHTML += num + "<br>")
        .catch(err => alert(err.message));


}

function getRandomNumAfterDelay2(min, max) {
    return new Promise((callback, failCallback) => {
        setTimeout(() => {
            const num = Math.floor(Math.random() * (max - min + 1) + min);

            // demo crash
            if (Math.random() < 0.3333) {
                const err = new Error("Some error...");
                failCallback(err);
            }
            else {
                callback(num);
            }

        }, 1000);
    });
}

//-----------------------------------------------------------------------------------------------------
// Exercise 1

function paint1() {
    getRandomColorAfterDelay1(
        pageColor => document.body.style.backgroundColor = pageColor,
        err => alert("Error: " + err.message)
    );
}

function getRandomColorAfterDelay1(successCallback, errorCallback) {
    setTimeout(() => {

        const namedColors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "white", "gray", "cyan", "magenta", "lime", "navy", "teal", "olive", "maroon", "gold", "silver"];
        const index = Math.floor(Math.random() * namedColors.length);
        const color = namedColors[index];

        if (Math.random() < 0.3333) {
            const err = new Error("Some random error...");
            errorCallback(err);
        }
        else {
            successCallback(color);
        }

    }, 1000);
}

function paint2() {
    const myPromise = getRandomColorAfterDelay2() // why if i get it, In const it works with 
    console.log(myPromise);
    myPromise.then(pageColor => { document.body.style.backgroundColor = pageColor; console.log(myPromise); })
    myPromise.catch(err => { alert("Error: " + err.message); console.log(myPromise); })

}

function getRandomColorAfterDelay2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const namedColors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "white", "gray", "cyan", "magenta", "lime", "navy", "teal", "olive", "maroon", "gold", "silver"];
            const index = Math.floor(Math.random() * namedColors.length);
            const color = namedColors[index];

            if (Math.random() < 0.3333) {
                const err = new Error("Some random error...");
                reject(err);
            }
            else {
                resolve(color);
            }

        }, 1000);
    })

}


// This is callback HELL DONT DO THIS SHIT EVER
function display3() {
    get3RandomNumAfterDelay(1, 1000)
        .then(num1 => {
            document.body.innerHTML += "First number: " + num1 + "<br>"

            get3RandomNumAfterDelay(1, num1)
                .then(num2 => {
                    document.body.innerHTML += "Second number: " + num2 + "<br>";
                    get3RandomNumAfterDelay(1, num2)
                        .then(num3 => document.body.innerHTML += "Third number: " + num3 + "<br>")
                        .catch(err => alert(err.message))
                }
                )
                .catch(err => alert(err.message))

        })
        .catch(err => alert(err.message));
}

function get3RandomNumAfterDelay(min, max) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.floor(Math.random() * (max - min + 1) + min);

            // demo crash
            if (Math.random() < 0.3333) {
                const err = new Error("Some error...");
                reject(err);
            }
            else {
                resolve(num);
            }

        }, 1000);
    });
}


// Await, is a function that makes, the code wait for asnychronized code too finish using (Promise object);
// only if there is too the right of Await a promise object then it will wait too the asnychronized code too finish.

async function display4() {
    try {
        const num1 = await get3RandomNumAfterDelay(1, 1000);
        document.body.innerHTML += "First number: " + num1 + "<br>"

        const num2 = await get3RandomNumAfterDelay(1, num1);
        document.body.innerHTML += "First number: " + num2 + "<br>"

        const num3 = await get3RandomNumAfterDelay(1, num3);
        document.body.innerHTML += "First number: " + num1 + "<br>"
    }
    catch {
        alert(err.message);
    }

}

async function paint3() {
    try {
        const pageColor = await getRandomColorAfterDelay2();
        document.body.style.backgroundColor = pageColor;
    }
    catch (err) {
        alert(err.message);
    }
}