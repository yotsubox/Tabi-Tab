import { addEventListeners, addFunctionalities } from "./SaveButton/Init.js";

export class SaveButton {
  /** make existing <img/> tag into a save button.
   *  @param {HTMLImageElement} elem
   */
  static FromExistingElem(elem) {
    elem.classList.add("--gray-scale");
    elem.classList.add("--low-opacity");

    addFunctionalities(elem);
    addEventListeners(elem);
    return elem;
  }
}
