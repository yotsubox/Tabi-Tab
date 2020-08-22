import { makeElementEditable } from "../Utils.js";
import { addEventListeners } from "./Title/Init.js";

export class Title {
  static Create(tabList, titleName = "Title") {
    const title = document.createElement("div");
    title.className = "list__title";
    title.textContent = titleName;
    title._owner = tabList;

    makeElementEditable(title);

    addEventListeners(title);
    addFunctionalities(title);

    return title;
  }
}
function addFunctionalities() {}
