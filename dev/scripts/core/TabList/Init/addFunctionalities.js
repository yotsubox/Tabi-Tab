import { Item, getContentsFrom } from "../Init.js";
import { ChangesDetector } from "../../SaveSystem.js";
import { SavableObjects } from "../../SaveSystem/SavableObjects.js";

export function addFunctionalities(tabList) {
  tabList.getItemCount = function () {
    return this._itemCount;
  };

  tabList.removeItem = function (item) {
    item.remove();
    this._itemCount--;
    this.fixOrderNumber();
    this._decoration.margin.updateHeight();
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
    ChangesDetector.detected();

    this._itemCount++;
    const item = Item.Create(this, this._itemCount, url);

    if (this._settings.unorderedList) item.toggleUnordered();

    this._decoration.margin.updateHeight();
    return item;
  };

  tabList.toggleMinimization = function () {
    ChangesDetector.detected();

    const itemContainer = this.getItemContainer();
    itemContainer.classList.toggle("--collapse");
    this._minimizePadding.classList.toggle("--collapse");

    this._settings.minimized = !this._settings.minimized;
    this._decoration.margin.updateHeight();
  };

  tabList.toggleUnorderedListStyle = function () {
    ChangesDetector.detected();

    const items = this.getItems();
    for (let i = 0; i < items.length; i++) {
      items[i].toggleUnordered();
    }

    this._futureItem.toggleUnorderedListStyle();

    this._settings.unorderedList = !this._settings.unorderedList;
  };

  tabList.runFocusAnimation = function () {
    tabList.classList.add("list--focus-animation");
  };

  tabList.isMinimized = function () {
    return this._settings.minimized;
  };

  tabList.fixOrderNumber = function () {
    ChangesDetector.detected();

    const items = this.getItems();
    for (let i = 0; i < items.length; i++) {
      items[i].setOrderNumber(i + 1);
    }
  };

  tabList.clearItems = function () {
    if (tabList.getItemCount() === 0) return;
    ChangesDetector.detected();

    this.getItems().forEach((item) => item.remove());
    this._itemCount = 0;
  };

  tabList.remove = function () {
    ChangesDetector.detected();
    this._navigationHeading.previousElementSibling.remove();
    this._navigationHeading.remove();

    if (this.parentNode) this.parentNode.removeChild(this);
    SavableObjects.delete(this);
  };

  tabList.stringify = function () {
    return JSON.stringify({
      type: this._type,
      settings: this._settings,
      titleName: this.getTitleName(),
      itemContents: getContentsFrom(this.getItems()),
    });
  };
}
