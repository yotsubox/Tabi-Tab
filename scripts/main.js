import { createAddListButton } from "./core/createAddListButton.js";

//debug
setInterval(() => {
  console.log(window.scrollY);
}, 100);

const listsElem = document.createElement("div");
document.body.appendChild(listsElem);
listsElem.className = "lists";

// const debug = document.createElement("div");
// document.body.appendChild(debug);
// debug.style.height = "2000px";
// debug.style.backgroundColor = "blue";

//add existing lists

//"add list" button.
createAddListButton(listsElem);
