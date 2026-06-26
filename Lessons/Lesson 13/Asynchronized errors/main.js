function displayRandomNum() {
    try {
        const num = getRandomNum(1, 5);
        document.body.innerHTML += num + "<br>"
    }
    catch (err) {
        alert("Some Error pls try again " + err.message);
    }
}

function getRandomNum(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    // Demo for some crash sometimes:
    if (Math.random() < 0.333) {
        throw new Error("Some demo crash")
    }

    return num;
}

function displayRandomAfterDelay() {
    getRandomNumAfterDelay(1, 5, num => document.body.innerHTML += num + "<br>",
        err => alert("sOME error: " + err.message)
    );
}

function getRandomNumAfterDelay(min, max, callback, callbackFail) {
    setTimeout(() => {
        const num = Math.floor(Math.random() * (max - min + 1) + min);

        if (Math.random() < 0.333) {
            const err = new Error("Some Crash!!");
            callbackFail(err);
        }
        else {
            callback(num);

        }



    }, 1000);
}

function paintPageAfterDelay() {
    console.log("start button");
    getRandomColorAfterDelay(color => document.body.style.backgroundColor = color,
        err => alert("Error message: " + err.message)
    );

    console.log("end button");
}

function getRandomColorAfterDelay(callback, callbackError) {
    setTimeout(() => {
        const colors = [ "Crimson", "DeepSkyBlue", "Goldenrod", "Emerald", "DarkOrchid", "Coral", "Teal", "Salmon", "ForestGreen", "MidnightBlue", "Gold", "HotPink", "Turquoise", "Tomato", "SlateGray", "LimeGreen", "RoyalBlue", "Plum", "Navy", "Charcoal" ];
        const index = Math.floor(Math.random() * colors.length)

        if (Math.random() < 0.25) {
            const err = new Error("Some error!!");
            callbackError(err);
        } else { callback(colors[index]); }


    }, 1000);
}

function displayStrongPass(){
getStrongPasswordAfterDelay(
    password => document.body.innerHTML += password,
 err => alert("Error: " + err.message)   
);
}

function getStrongPasswordAfterDelay(strongPassword, weakPassword){
setTimeout(() => {
    const password = generatePassword();
    if(password.length < 8){
        const err = Error("Password must have more then 8 chars")
        weakPassword(err);
    }else{
        strongPassword(password);
    }

}, 1000);
}

function generatePassword(){
    // strong password, has too have min 8 chars, min 3 different groups.
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0987654321!@#$%^&*()_+";
    const size = Math.floor(Math.random()*10) + 3;
    let password = "";
    for(let i = 0; i < size; i ++){
        const index = Math.floor(Math.random()*chars.length);
        const char = chars[index];
        password +=char;
    }
    return password;

}