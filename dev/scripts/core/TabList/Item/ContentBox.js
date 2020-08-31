import { createElement, makeElementEditable } from "../../Utils.js";

export class ContentBox {
  static Create(item, textContent = "") {
    const contentBox = createElement("div", "list__item-content-box");
    makeElementEditable(contentBox);
    contentBox._owner = item;

    contentBox.textContent = textContent;
    return contentBox;
  }
}
