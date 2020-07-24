import { createElement, makeElementEditable } from "../../Utils.js";
import { initFutureItemEvents } from "./TabListEvents.js";

export function newFutureItem(tabList) {
  const futureItem = createElement("div", "list__item list__item--add-more");
  makeElementEditable(futureItem);

  initFutureItemEvents(tabList, futureItem);

  tabList.itemWrapper.appendChild(futureItem);
  return futureItem;
}
