async function displayUsers() {

    try {
        const url = "https://jsonplaceholder.typicode.com/users"
        const users = await getJson(url);
        presentUsers(users);
    }
    catch (err) {
        alert(err.message);
    }

}

async function getJson(url) {
    const response = await fetch(url);
    const jsonString = await response.json();
    return jsonString;
}

function presentUsers(users) {
    const tBody = document.getElementById("tBody");
    tBody.innerHTML = "";

    for (const user of users) {
        const tr = `
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>
        <a href="https://maps.google.com/?q=${user.address.geo.lat},${user.address.geo.lng}" target="_blank">location</a>
        </td>
        `
        tBody.innerHTML += tr;
    }

}

