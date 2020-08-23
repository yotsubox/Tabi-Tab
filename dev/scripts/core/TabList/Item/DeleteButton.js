import { createElement } from "../../Utils.js";
import { addFunctionalities, addEventListeners } from "./DeleteButton/Init.js";
import { remove as defaultPath } from "../../ImagePaths.js";

export class DeleteButton {
  static Create(item, imgPath = defaultPath) {
    const deleteButton = createElement("img", "list__item-delete-btn --hidden");
    deleteButton._owner = item;
    deleteButton.src = imgPath;

    addFunctionalities(deleteButton);
    addEventListeners(deleteButton);

    return deleteButton;
  }
}
