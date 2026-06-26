import { Color } from "./color-options.js";

function getColorItem(color: Color) {

    switch (color) {
        case Color.Blue:
            document.body.innerHTML += `Blue sky!!!<br>`
            break;
        case Color.Red:
            document.body.innerHTML += `red like BLOOD<br>`
            break;
        case Color.Green:
            document.body.innerHTML += `Green like forest<br>`
            break;
        case Color.Purple:
            document.body.innerHTML += `GAY???<br>`
            break;
        case Color.Yellow:
            document.body.innerHTML += `Yellow submerine<br>`
            break;
    }
}

 getColorItem(Color.Purple);
 getColorItem(Color.Red);
 getColorItem(Color.Blue);
 getColorItem(Color.Green);
 getColorItem(Color.Yellow);
 
