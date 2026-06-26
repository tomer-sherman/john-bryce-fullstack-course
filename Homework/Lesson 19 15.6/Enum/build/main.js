import { Color } from "./color-options.js";
function getColorItem(color) {
    const message = {
        [Color.Red]: "הצבע הוא אדום 🔴",
        [Color.Blue]: "הצבע הוא כחול 🔵",
        [Color.Green]: "הצבע הוא ירוק 🟢",
        [Color.Yellow]: "הצבע הוא צהוב 🟡",
        [Color.Purple]: "הצבע הוא סגול 🟣"
    };
}
getColorItem(Color.Purple);
getColorItem(Color.Red);
getColorItem(Color.Blue);
getColorItem(Color.Green);
getColorItem(Color.Yellow);
