function notifier(header, body, footer) {
    alert(`
        ${header}
        --------------------------------------
        ${body}
        --------------------------------------
        ${footer}
        `);
}
;
// notifier<boolean>("Now:", true, "Current Time");
// notifier<boolean>("Now:", false, "Current Time");
import { Backup } from "./backup.js";
import { Kitten } from "./kitten.js";
const kitten = new Kitten("Emily", "Gray", 3);
const name = kitten.name;
const color = kitten.color;
const age = kitten.age;
const kittenString = `${name} ${color} ${age}`;
const myBackup1 = new Backup("Rome", "Wasn't built in a day");
const myBackup2 = new Backup("Amos gaming", 2);
const myBackup3 = new Backup("Gaming Amos", true);
const myBackup4 = new Backup("The date today is:", new Date());
// This will show [OBJECT OBJECT] since we work here with an object.
const kittenBackup1 = new Backup("KITTEN", kitten);
// This will show it good since we stringfied the Kitten object
const kittenBackup2 = new Backup("KITTEN", kittenString);
myBackup1.display();
myBackup2.display();
myBackup3.display();
myBackup4.display();
kittenBackup1.display();
kittenBackup2.display();
