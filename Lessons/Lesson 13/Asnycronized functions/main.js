function displayRandomNumberAfterDelay() {
  console.log("start button");
  getRandomNumberAfterDelay(1, 100, result => console.log("result: " + result));
  console.log("end button");
}

function getRandomNumberAfterDelay(min, max, callback) {
  setTimeout(() => {
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    callback(num);
  }, 3000);
}

function paintPageAfterDelay() {
  console.log("start button");
  getRandomColorAfterDelay(color=> document.body.style.backgroundColor = color);
  console.log("end button");
}

function getRandomColorAfterDelay(callback) {
  setTimeout(() => {
    const colors = [
      "Crimson", "DeepSkyBlue", "Goldenrod", "Emerald", "DarkOrchid",
      "Coral", "Teal", "Salmon", "ForestGreen", "MidnightBlue",
      "Gold", "HotPink", "Turquoise", "Tomato", "SlateGray",
      "LimeGreen", "RoyalBlue", "Plum", "Navy", "Charcoal"
    ];
    const index = Math.floor(Math.random()*colors.length)
    callback(colors[index]);
  }, 1000);
}