import {
  createOptionElement,
  createOptionName,
  addListener,
  dispatchEvent,
} from "./Option/Init.js";

export class ButtonOption {
  static Create(owner, name) {
    const option = createOptionElement();
    option._owner = owner;
    option._listenersData = [];

    option._nameBar = createOptionName();
    option._nameBar.textContent = name;

    addFunctionalities(option);
    addEventListeners(option);

    option.append(option._nameBar);

    return option;
  }
}

function addFunctionalities(option) {
  option.addListener = addListener;
  option._dispatchEvent = dispatchEvent;
}

function addEventListeners(option) {
  option.addEventListener("click", () => {
    option._dispatchEvent();
  });
}
