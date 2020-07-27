import { makeElementEditable } from "../Utils.js";
import { addEventListeners } from "./Title/Init.js";

export class Title {
  static Create(tabList, titleName = "Title") {
    const title = document.createElement("div");
    title.className = "list__title";
    title.textContent = titleName;

    makeElementEditable(title);

    addEventListeners(title, tabList);

    return title;
  }
}