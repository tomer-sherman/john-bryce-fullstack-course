
const allColors = [];

function addColor() {

    const redBox = document.getElementById("redBox");
    const greenBox = document.getElementById("greenBox");
    const blueBox = document.getElementById("blueBox");

    const red = +redBox.value;
    const green = +greenBox.value;
    const blue = +blueBox.value;

    const color = { red, green, blue };


    allColors.push(color);

    saveColors();
    displayColors();

}

function saveColors() {
    const jsonString = JSON.stringify(allColors);
    localStorage.setItem("all-colors", jsonString);
}

function displayColors() {
    const tBody = document.getElementById("tBody");
    tBody.innerHTML = "";

    for (const color of allColors) {
        const tr = ` 
        <tr>
            <td style="height: 20px; width: 50px; background-color: rgb(${color.red}, 0, 0);"> </td>
            <td style="height: 20px; width: 50px; background-color: rgb(0, ${color.green}, 0);"> </td>
            <td style="height: 20px; width: 50px; background-color: rgb(0, 0, ${color.blue});"> </td>
            <td style="height: 20px; width: 50px; background-color: rgb(${color.red}, ${color.green}, ${color.blue});"> </td>
        </tr> `;

        tBody.innerHTML += tr;
    }

}

