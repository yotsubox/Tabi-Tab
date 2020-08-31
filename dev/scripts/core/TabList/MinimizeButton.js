import { addFunctionalities, addEventListeners } from "./MinimizeButton/Init.js";

export class MinimizeButton {
  static Create(tabList) {
    const button = document.createElement("div", "");

    button.classList.add("list__minimize-btn");
    button._owner = tabList;
    button._minimize = false;

    addFunctionalities(button);
    addEventListeners(button);

    return button;
  }
}
