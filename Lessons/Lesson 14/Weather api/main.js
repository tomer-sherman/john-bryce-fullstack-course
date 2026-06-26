//-----------------------------------------------------------
//-----------------------------------
async function displayWeather() {
    try {

    
        const key = "7d5b954f08f04ffeb32113506262505";
        const city = "Tel aviv&aqi=no";
        const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`;
        const weather = await getJson(url);
        presentWeather(weather);
    }
    catch(err) {
        alert(err.message);
    }
}
 
async function getJson(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}
 
function presentWeather(weather) {
    const weatherPar = document.getElementById("weatherPar");
    weatherPar.innerHTML = weather.current.condition.text + ", Temperature: " + weather.current.temp_c;
}