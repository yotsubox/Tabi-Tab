import { createElement, makeElementEditable } from "../Utils.js";
import { newFutureItem } from "./newFutureItem.js";
import {
  menuEvent,
  initItemEvents,
  initFutureItemEvents,
} from "./TabListEvents.js";
import { newItem } from "./newItem.js";

export function newTabList() {
  const tabList = createElement("div", "list");
  tabList.itemCount = 0;

  tabList.itemWrapper = addItemWrapper(tabList);
  tabList.title = addTitle(tabList);
  tabList.futureItem = addFutureItem(tabList);

  tabList.addEventListener("contextmenu", menuEvent);

  tabList.getItemCount = function () {
    return tabList.itemCount;
  };

  tabList.removeItem = function (item) {
    item.remove();
    tabList.itemCount--;
  };

  tabList.getTitleName = function () {
    return tabList.title.textContent();
  };

  tabList.getItems = function () {
    return tabList.elem.querySelectorAll(".list__item-content");
  };

  tabList.newListItem = function () {
    tabList.itemCount++;
    const item = newItem(tabList.itemCount);
    makeElementEditable(item.getContentElem());
    initItemEvents(tabList, item, tabList.itemWrapper, tabList.futureItem);
    return item;
  };

  return tabList;
}

function addItemWrapper(tabList) {
  const itemWrapper = createElement("div", "list__item-wrapper");
  tabList.appendChild(itemWrapper);

  return itemWrapper;
}

function addTitle(tabList) {
  const title = document.createElement("div");
  title.className = "list__title";
  title.textContent = "Title";

  makeElementEditable(title);

  title.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && tabList.itemCount === 0)
      tabList.futureItem.focus();
  });

  tabList.itemWrapper.appendChild(title);
  return title;
}

function addFutureItem(tabList) {
  const futureItem = newFutureItem();

  initFutureItemEvents(tabList, futureItem);

  tabList.itemWrapper.appendChild(futureItem);
  return futureItem;
}
