import { Direction } from "./enums.js";
move(Direction.Right);
move(Direction.Left);
move(Direction.Up);
move(Direction.Down);
//move("diagonal"); // IT WILL NOT DO ANYTHING!!! not good.
// You don't want too give the coder, a general direction, He can write some random shit.
// Thats why Enun was created. A table of specific, properties. that you can only use them.
function move(go) {
    switch (go) {
        case Direction.Right:
            document.body.innerHTML += `Moving right...<br>`;
            break;
        case Direction.Left:
            document.body.innerHTML += `Moving left...<br>`;
            break;
        case Direction.Up:
            document.body.innerHTML += `Moving up...<br>`;
            break;
        case Direction.Down:
            document.body.innerHTML += `Moving down...<br>`;
            break;
    }
}
document.body.innerHTML += `Right value: ${Direction.Right} <br>`;
document.body.innerHTML += `Right value: ${Direction.Left} <br>`;
