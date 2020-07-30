import { Type } from "../../Utils.js";
import { Item, showMenu, getURLsFrom } from "../Init.js";

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

  tabList.getTitle = function () {
    return this._title;
  };

  tabList.getItems = function () {
    return Array.from(this._itemContainer.children).slice(0, this._itemCount);
  };

  tabList.getFutureItem = function () {
    return this._futureItem;
  };

  tabList.getItemContainer = function () {
    return this._itemContainer;
  };

  tabList.getMinimizeButton = function () {
    return this._minimizeButton;
  };

  tabList.newItem = function (url = "") {
    this._itemCount++;
    const item = Item.Create(this, this._itemCount, url);

    return item;
  };

  tabList.toggleMinimization = function () {
    const itemContainer = this.getItemContainer();
    tabList._minimized = itemContainer.classList.toggle("--collapse");
  };

  tabList.isMinimized = function () {
    return this._minimized;
  };

  tabList.stringify = function () {
    const urls = getURLsFrom(this.getItems());

    return JSON.stringify({
      type: Type.TabList,
      settings: this._settings,
      titleName: this.getTitleName(),
      urls: urls,
    });
  };
}
