import { createElement } from "../../Utils.js";
import { addFunctionalities, addEventListeners } from "./RemoveButton/Init.js";
import { remove as defaultPath } from "../../ImagePaths.js";

export class RemoveButton {
  static Create(item, imgPath = defaultPath) {
    const removeButton = createElement("img", "list__item-delete-btn --hidden");
    removeButton._owner = item;
    removeButton.src = imgPath;

    addFunctionalities(removeButton);
    addEventListeners(removeButton);

    return removeButton;
  }
}
