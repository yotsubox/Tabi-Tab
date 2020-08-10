import { createElement, makeElementEditable } from "../../Utils.js";
import { addFunctionalities } from "./ContentBox/Init.js";

export class ContentBox {
  static Create(item, textContent = "") {
    const contentBox = createElement("div", "list__item-content-box");
    makeElementEditable(contentBox);
    contentBox._owner = item;

    addFunctionalities(contentBox);

    contentBox.textContent = textContent;
    return contentBox;
  }
}
