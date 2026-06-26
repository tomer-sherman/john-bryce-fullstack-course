function showTime() {
    console.log("Start");
    generateTime();
    console.log("End");

}
function generateTime() {
    setTimeout(() => {
        const time = new Date();
        time.setSeconds(time.getSeconds() - 3);
        const timeString = time.toLocaleTimeString();
        console.log(timeString);
    }, 3000);

}

function displayRandomNum() {
    console.log("start");
    generateRandomNum();
    console.log("end");
}

function generateRandomNum() {

    let counter = 0
    const interval = setInterval(() => {
        const num = Math.floor(Math.random() * 101);
        console.log(num);
        counter++
        if (counter === 3) { clearInterval(interval) }
    }, 1000);

}

function generateRandomNumInSpan() {
    setInterval(() => {
        const max = document.getElementById("maxNum").value;
        const span = document.getElementById("spanBox");
        const num = Math.floor(Math.random() * (parseInt(max) + 1))
        span.innerHTML = num;
    }, 1000);
}

function generateRandomColor() {
    setInterval(() => {
        const colors = ["red", "blue", "green", "orange", "purple", "deeppink"];
        const num = Math.floor(Math.random() * colors.length);
        document.body.style.backgroundColor = colors[num];
    }, 1000);
}
 generateRandomColor()

 function generateRandomNumAfterDelay(limit, callback){
    setTimeout(() => {
        const num = Math.floor(Math.random()*(limit+1));
        callback(num);
    }, 1000);
 }

 function btn(){
    generateRandomNumAfterDelay(1000 , num=> console.log(num))
 }