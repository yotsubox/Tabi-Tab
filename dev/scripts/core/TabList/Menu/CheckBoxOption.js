import {
  createOptionElement,
  createOptionName,
  addListener,
  dispatchEvent,
} from "./Option/Init.js";
import { createElement } from "../../Utils.js";

export class CheckBoxOption {
  static Create(owner, name, checked) {
    const option = createOptionElement();
    option._owner = owner;
    option._listenersData = [];

    option._checkBox = createElement("input", "list-menu__option-check-box");
    option._checkBox.type = "checkbox";
    option._checkBox.checked = checked;

    option._nameBar = createOptionName();
    option._nameBar.textContent = name;

    addFunctionalities(option);
    addEventListeners(option);

    option.append(option._checkBox, option._nameBar);
    return option;
  }
}

function addFunctionalities(option) {
  option.addListener = addListener;
  option._dispatchEvent = dispatchEvent;
}

function addEventListeners(option) {
  const checkbox = option._checkBox;

  //apparently mousedown happened before focus.
  //this is to make check box not on focus, so that the menu won't close.
  option.addEventListener("mousedown", (e) => {
    e.preventDefault();
  });

  option.addEventListener("click", () => {
    option._dispatchEvent();
    checkbox.checked = !checkbox.checked;
  });

  checkbox.addEventListener("click", (e) => {
    //unchanged checkbox checked state (since option click event already handle that)
    checkbox.checked = !checkbox.checked;
  });
}
