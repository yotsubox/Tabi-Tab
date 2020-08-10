import { createElement } from "../../Utils.js";
import { addFunctionalities, addEventListeners } from "./CopyButton/Init.js";

export class CopyButton {
  static Create(item, imgPath = "./images/copy-link-button.png") {
    const copyButton = createElement("img", "list__item-copy-btn --hidden");
    copyButton._owner = item;
    copyButton.src = imgPath;

    addFunctionalities(copyButton);
    addEventListeners(copyButton);

    return copyButton;
  }
}
