import { Type } from "../../Utils.js";
import { Item, showMenu } from "../Init.js";

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
    return this._title.textContent;
  };

  tabList.getItems = function () {
    return this.querySelectorAll(".list__item:not(.list__item--add-more)");
  };

  tabList.getFutureItem = function () {
    return this._futureItem;
  };

  tabList.getItemWrapper = function () {
    return this._itemWrapper;
  };

  tabList.newItem = function (url = "") {
    this._itemCount++;
    const item = Item.Create(this, this._itemCount, url);

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
