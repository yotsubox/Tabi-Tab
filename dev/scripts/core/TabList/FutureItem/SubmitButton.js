import { createElement } from "../../Utils/createElement.js";

export class SubmitButton {
  static Create(futureItem, imgPath = "./images/submit-button.png") {
    const submitButton = createElement("img", "list__future-item-submit-button --hidden");
    submitButton.src = imgPath;
    submitButton._owner = futureItem;

    addEventListeners(submitButton);
    return submitButton;
  }
}

function addEventListeners(submitButton) {
  submitButton.addEventListener("mousedown", (e) => {
    e.preventDefault();
    submitButton._owner.newItemIfNotEmpty();
  });
}
