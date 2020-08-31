import { createElement } from "../../Utils/createElement.js";
import { submit as defaultPath } from "../../ImagePaths.js";

export class SubmitButton {
  static Create(futureItem, imgPath = defaultPath) {
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

    const prevTop = submitButton._owner.getBoundingClientRect().top;

    submitButton._owner.newItemIfNotEmpty();

    window.scrollBy(0, submitButton._owner.getBoundingClientRect().top - prevTop);
  });
}
