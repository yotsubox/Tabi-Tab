import { addEventListeners } from "./NewTabListButton/Init.js";
import { createElement } from "./Utils/createElement.js";

export class NewTabListButton {
  /**
   * create new "add new list" button.
   * @param {HTMLElement} appendTarget append to given target (default: null).
   */
  static Create(appendTarget = null) {
    const addListButton = createElement("div", "new-list-btn");

    if (appendTarget) appendTarget.appendChild(addListButton);

    addListButton.textContent = "New List";
    addListButton._listsElem = addListButton.previousElementSibling;

    addEventListeners(addListButton);

    return addListButton;
  }
}
