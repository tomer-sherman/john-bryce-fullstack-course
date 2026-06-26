function displayUserLocation(){
    const locationPar = document.getElementById("locationPar");

    navigator.geolocation.getCurrentPosition(
        (position)=>{locationPar.innerText = position.coords.latitude + " ," + position.coords.longitude},
        (err)=>{alert(err.message)},
)
}