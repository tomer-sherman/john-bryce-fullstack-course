"use strict";

let str = "Hello";
str[0] = "X"; // this is a logical bug without the strict mode the system will still work with the strict mode the Web doesn't work
document.write(str+"<br>")