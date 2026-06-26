"use strict";

(() => {

    setInterval(() => {
        const now = new Date();
        document.title = now.toLocaleTimeString;
    }, 1000);



})();