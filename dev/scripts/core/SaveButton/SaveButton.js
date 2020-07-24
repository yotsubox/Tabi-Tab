import { initSaveButtonEvents, addFunctionalities } from "./Init.js";
import { createElement } from "../Utils/createElement.js";

export class SaveButton {
  /** make existing <img/> tag into a save button.
   *  @param {HTMLImageElement} elem
   */
  static FromExistingElem(elem) {
    elem.classList.add("--gray-scale");

    addFunctionalities(elem);
    initSaveButtonEvents(elem);
    return elem;
  }
}
