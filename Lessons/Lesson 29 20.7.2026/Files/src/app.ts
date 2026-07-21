// FS = File system

import fsPromises from "fs/promises";
import fs from "fs";



// IFEE
(async () => {

    const folder = "./data";
    const file = folder + "/multiplication-board";

    // Create folder
    await fsPromises.mkdir("./data", { recursive: true }); // Recursive true prevent crash if the folder already exists

    // Write file - abd overide if exists
    await fsPromises.writeFile("./data/details.txt", "Name: Moishe\n Moishe.sherman11@gmail.com");
    await fsPromises.writeFile("./data/details.txt", "Name: Tomer\n tomer.sherman11@gmail.com"); // This overides the last file that was named this way

    //Append to file- add text too the files:
    await fsPromises.appendFile("./data/details.txt", "Name: Tomer\n tomer.sherman11@gmail.com"); // Use append too add more text too the file

    // Read file
    const content = await fsPromises.readFile("./data/details.txt", "utf-8"); // You have too use utf-8 cause the computers reads it in binary, 
    // You need too say in what kind of format too store this data





    // Exrcise:

    await fsPromises.mkdir("./data", { recursive: true })



    // You can use fc, too check if a file exists and use it how you would like.
    if (fs.existsSync("./data/multiplication-board.txt")) await fsPromises.unlink("./data/multiplication-board.txt");


    for (let i = 0; i <= 10; i++) {

        for (let j = 1; j <= 10; j++) {
            const num = j * i;

            await fsPromises.appendFile("./data/multiplication-board.txt", num + " ");
        }

        await fsPromises.appendFile("./data/multiplication-board.txt", "\n");
    };

    




















})();



