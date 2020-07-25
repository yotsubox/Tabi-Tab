import { Type } from "../../Utils.js";
import { Item, showMenu, addItemEventListeners } from "../Init.js";

export function addFunctionalities(tabList) {
  tabList.addEventListener("contextmenu", showMenu);

  tabList.getItemCount = function () {
    return this._itemCount;
  };

  tabList.removeItem = function (item) {
    item.remove();
    this._itemCount--;
  };

  tabList.getTitleName = function () {
    return this.titleElem.textContent;
  };

  tabList.getItems = function () {
    return this.querySelectorAll(".list__item:not(.list__item--add-more)");
  };

  tabList.newItem = function (url = "") {
    this._itemCount++;
    const item = Item.Create(this._itemCount, url);
    addItemEventListeners(this, item, this.itemWrapper, this.futureItem);

    return item;
  };

  tabList.stringify = function () {
    const urls = [].map.call(this.getItems(), (item) => item.getURL());
    return JSON.stringify({
      type: Type.TabList,
      settings: this._settings,
      titleName: this.getTitleName(),
      urls: urls,
    });
  };
}
