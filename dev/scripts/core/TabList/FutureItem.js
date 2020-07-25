import { createElement, makeElementEditable } from "../Utils.js";
import { addEventListeners } from "./FutureItem/Init.js";

export class FutureItem {
  static Create(tabList) {
    const futureItem = createElement("div", "list__item list__item--add-more");
    makeElementEditable(futureItem);

    addEventListeners(tabList, futureItem);

    tabList.itemWrapper.appendChild(futureItem);
    return futureItem;
  }
}
