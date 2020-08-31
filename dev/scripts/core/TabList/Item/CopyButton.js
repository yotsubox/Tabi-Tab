import { createElement } from "../../Utils.js";
import { addFunctionalities, addEventListeners } from "./CopyButton/Init.js";
import { copyLink as defaultPath } from "../../ImagePaths.js";

export class CopyButton {
  static Create(item, imgPath = defaultPath) {
    const copyButton = createElement("img", "list__item-copy-btn --hidden");
    copyButton.src = imgPath;
    copyButton._owner = item;

    addFunctionalities(copyButton);
    addEventListeners(copyButton);

    return copyButton;
  }
}
