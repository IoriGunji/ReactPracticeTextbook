console.log("test");

const title = document.getElementById("title");
console.log(title);

const title2 = document.querySelector("#title");
console.log(title2);

const continers = document.getElementsByClassName("container");
console.log(continers);

const container = document.querySelector(".container");
console.log(continers);

const containers = document.querySelectorAll(".container");
console.log(containers);

const buttonEl = document.createElement("button");
buttonEl.textContent = "ボタン";
const div1El = document.querySelector(".container");
div1El.appendChild(buttonEl);
