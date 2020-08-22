import { createElement } from "../../Utils.js";
import { addFunctionalities, addEventListeners } from "./CopyButton/Init.js";

export class CopyButton {
  static Create(item, imgPath = "./images/copy-link-button.png") {
    const copyButton = createElement("img", "list__item-copy-btn --hidden");
    copyButton.src = imgPath;
    copyButton._owner = item;

    addFunctionalities(copyButton);
    addEventListeners(copyButton);

    return copyButton;
  }
}
