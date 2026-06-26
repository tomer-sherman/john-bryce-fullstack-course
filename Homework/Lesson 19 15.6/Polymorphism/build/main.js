import { Rectangle } from "./rectangle.js";
import { Square } from "./square.js";
import { Circle } from "./circle.js";
const myCircle = new Circle(3, 3, "Yellow", 4);
myCircle.display();
const mySquare = new Square(3, 3, "black", 5);
mySquare.display();
const myRectangle = new Rectangle(3, 3, "Rose", 3, 5);
myRectangle.display();
document.body.innerHTML += `<hr>`;
const shapeArray = [];
shapeArray.push(myCircle);
shapeArray.push(mySquare);
shapeArray.push(myRectangle);
function megaDisplay() {
    for (const obj of shapeArray) {
        obj.display();
    }
}
;
megaDisplay();
