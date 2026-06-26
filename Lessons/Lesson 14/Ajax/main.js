// Website https://api.chucknorris.io/
// API https://api.chucknorris.io/jokes/random

// once again DONT USE THIS SHIT CALLCAK HELL
function displayJoke1() {
 
    const url = "https://api.chucknorris.io/jokes/random";
    fetch(url)
        .then(response => {
            response.json()
                .then(joke => {
                    const jokePar = document.getElementById("jokePar");
                    jokePar.innerHTML = joke.value;
                })
                .catch(err => alert(err.message))
        })
        .catch(err => alert(err.message));
 
}
 
async function displayJoke2() {
    try {
        const url = "https://api.chucknorris.io/jokes/random";
        const response = await fetch(url);
        const joke = await response.json();
        const jokePar = document.getElementById("jokePar");
        jokePar.innerHTML = joke.value;
    }
    catch (err) {
        alert(err.message);
    }
}




async function displayJoke3() {

    try{
        const url = "https://api.chucknorris.io/jokes/random";
        const joke = await getJson(url);
        displayJoke(joke);
    }
    catch{
        alert(err.message);
    }


    
}

 //-----------------------------------------------------------

    async function getJson(url) {
    // Added 'await' so it waits for the fetch to resolve before moving to .json()
    const response = await fetch(url); 
    const json = await response.json();
    return json;
}


 async function displayFact(){
try{
    const url = "https://catfact.ninja/fact";
    const catFact = await getJson(url);
    displayCarFact(catFact);

}
catch(err){
    alert(err.message);
}
 }

 function displayCarFact(catFact){
    const factPar = document.getElementById("catPar");
    factPar.innerHTML = catFact.fact;
 }



