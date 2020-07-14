import { createElement, makeElementEditable } from "../Utils.js";

export function newFutureItem() {
  const futureItem = createElement("div", "list__item list__item--add-more");
  makeElementEditable(futureItem);

  return futureItem;
}
