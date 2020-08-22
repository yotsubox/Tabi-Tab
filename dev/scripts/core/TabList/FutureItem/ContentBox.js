import { createElement, makeElementEditable } from "../../Utils.js";

export class ContentBox {
  static Create(futureItem) {
    const contentBox = createElement("div", "list__future-item-content-box");
    contentBox._owner = futureItem;
    makeElementEditable(contentBox);

    addEventListeners(contentBox);

    return contentBox;
  }
}

function addEventListeners(contentBox) {
  contentBox.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") contentBox._owner.focusOnPreviousElem();
    if (e.key === "Enter") {
      //prevent line-break
      e.preventDefault();
      contentBox._owner.newItemIfNotEmpty();
    }
  });

  contentBox.addEventListener("blur", () => {
    contentBox.textContent = contentBox.textContent.trim();
    contentBox._owner.toggleButtons();
  });

  contentBox.addEventListener("focus", () => {
    contentBox._owner.toggleButtons();
  });
}
