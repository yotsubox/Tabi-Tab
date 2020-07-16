import { Type, makeElementEditable } from "../../Utils.js";
import { initItemEvents } from "./TabListEvents.js";
import { newItem } from "../TabListInit.js";
import { menuEvent } from "./TabListEvents.js";

export function addFunctionalities(tabList) {
  tabList.addEventListener("contextmenu", menuEvent);

  tabList.getItemCount = function () {
    return this._itemCount;
  };

  tabList.removeItem = function (item) {
    item.remove();
    this.itemCount--;
  };

  tabList.getTitleName = function () {
    return this.titleElem.textContent;
  };

  tabList.getItems = function () {
    return this.querySelectorAll(".list__item:not(.list__item--add-more)");
  };

  tabList.newListItem = function (url = "") {
    this._itemCount++;
    const item = newItem(this._itemCount, url);
    makeElementEditable(item.getContentElem());
    initItemEvents(this, item, this.itemWrapper, this.futureItem);

    return item;
  };

  tabList.stringify = function () {
    const urls = [].map.call(this.getItems(), (item) => item.getURL());
    return JSON.stringify({
      type: Type.TabList,
      titleName: this.getTitleName(),
      urls: urls,
    });
  };
}
