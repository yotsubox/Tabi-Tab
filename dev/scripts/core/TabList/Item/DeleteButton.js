import { createElement } from "../../Utils.js";
import { addFunctionalities, addEventListeners } from "./DeleteButton/Init.js";

export class DeleteButton {
  static Create(item, imgPath = "./images/delete-button.svg") {
    const deleteButton = createElement("img", "list__item-delete-btn --hidden");
    deleteButton._owner = item;
    deleteButton.src = imgPath;

    addFunctionalities(deleteButton);
    addEventListeners(deleteButton);

    return deleteButton;
  }
}
