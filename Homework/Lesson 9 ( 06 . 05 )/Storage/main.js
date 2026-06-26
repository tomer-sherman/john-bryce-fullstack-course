// Save current time in local storage
function saveLocalData(){
const saveTime = new Date();
localStorage.setItem("saved-time", saveTime);
}
// Display time that was saved in local storage
function displayLocalData(){
const data = localStorage.getItem("saved-time");
alert(data);
};



function saveSessionStorage(){
    const num = Math.floor(Math.random()*(100-1+1)+1);
    sessionStorage.setItem("random-num",num);
}

function displaySessionStorage(){
    const sessionData = sessionStorage.getItem("random-num");
    alert(sessionData);
};

function clearData(){
    localStorage.removeItem("saved-time");
    sessionStorage.removeItem("random-num");
};
