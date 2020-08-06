import { createElement, makeElementEditable } from "../Utils.js";
import { addEventListeners } from "./FutureItem/Init.js";

export class FutureItem {
  static Create(tabList) {
    const futureItem = createElement("div", "list__item list__future-item");
    makeElementEditable(futureItem);

    addEventListeners(tabList, futureItem);
    addFunctionalities(futureItem);

    return futureItem;
  }
}

function addFunctionalities(futureItem) {
  futureItem.toggleUnorderedListStyle = function () {
    futureItem.classList.toggle("list__future-item--offset-left");
  };
}
