import { createAddListButton } from "./core/createAddListButton.js";

const listsElem = document.createElement("div");
document.body.appendChild(listsElem);
listsElem.className = "lists";

//add existing lists

//"add list" button.
const btn = createAddListButton(listsElem);

//DEBUG
btn.dispatchEvent(new MouseEvent("click"));
