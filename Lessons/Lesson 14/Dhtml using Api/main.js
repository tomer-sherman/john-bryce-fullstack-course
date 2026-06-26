 async function displayProducts(){

    try{
        const url = "https://dummyjson.com/products"
        const data = await getJson(url);
        presentProducts(data);
    }
    catch(err){
        alert(err.message);
    }



}

async function getJson(url){

    const response = await fetch(url);
    const jsonString = await response.json();
    return jsonString;
}

function presentProducts(data){
    const tBody = document.getElementById("tBody");
    tBody.innerHTML = "";

    for(const product of data.products){
       
            const tr = `
            <td>${product.title}</td>
            <td>${product.description}</td>
            <td>${product.category}</td>
            <td>${product.price}</td>
            `
            tBody.innerHTML += tr
    }
}