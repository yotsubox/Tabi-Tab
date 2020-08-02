import { Item, showMenu, getContentsFrom } from "../Init.js";

export function addFunctionalities(tabList) {
  tabList.addEventListener("contextmenu", showMenu);

  tabList.getItemCount = function () {
    return this._itemCount;
  };

  tabList.removeItem = function (item) {
    item.remove();
    this._itemCount--;
    this.fixOrderNumber();
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

  tabList.fixOrderNumber = function () {
    const items = tabList.getItems();
    for (let i = 0; i < items.length; i++) {
      items[i].setOrderNumber(i + 1);
    }
  };

  tabList.stringify = function () {
    const urls = getContentsFrom(this.getItems());
    return JSON.stringify({
      type: this._type,
      settings: this._settings,
      titleName: this.getTitleName(),
      urls: urls,
    });
  };
}
