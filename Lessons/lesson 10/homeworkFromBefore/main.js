function sendGender() {
    const maleRadio = document.getElementById("maleBox");
    const femaleRadio = document.getElementById("femaleBox");
    let gender;
    maleRadio.checked ? gender = "male" : gender = "female";
    localStorage.setItem("userGender", gender);
};


document.addEventListener("DOMContentLoaded", () => {
    
    // 2. NOW it's safe to look for the elements
    const maleRadio = document.getElementById("maleBox");
    const femaleRadio = document.getElementById("femaleBox");

    const savedGender = localStorage.getItem("userGender");

    // 3. Set the radio button based on localStorage
    if (savedGender === "male" && maleRadio) {
        maleRadio.checked = true;
    } else if (savedGender === "female" && femaleRadio) {
        femaleRadio.checked = true;
    }
});