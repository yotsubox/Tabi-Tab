import { Item, getContentsFrom } from "../Init.js";
import { ChangesDetector } from "../../SaveSystem.js";
import { SavableObjects } from "../../SaveSystem/SavableObjects.js";
import { background } from "../../../main.js";
import { insertElementBefore } from "../../Utils/insertElementBefore.js";

export function addFunctionalities(tabList) {
  tabList.getItemCount = function () {
    return this._itemCount;
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

  tabList.removeItem = function (item) {
    item.remove();
    this._itemCount--;

    this.fixOrderNumber();
    this._decoration.margin.updateHeight();
    background.updatePosition();
  };

  tabList.newItem = function (url = "") {
    this._itemCount++;
    const item = Item.Create(this, this._itemCount, url);
    insertElementBefore(tabList.getFutureItem(), item);

    if (this._settings.unorderedList) item.toggleUnordered();

    ChangesDetector.detected();
    this._decoration.margin.updateHeight();
    background.updatePosition();
    return item;
  };

  tabList.toggleMinimization = function () {
    const itemContainer = this.getItemContainer();
    itemContainer.classList.toggle("--collapse");
    this._minimizePadding.classList.toggle("--collapse");

    this._settings.minimized = !this._settings.minimized;

    ChangesDetector.detected();
    this._decoration.margin.updateHeight();
    background.updatePosition();
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
    ChangesDetector.detected();

    this.getItems().forEach((item) => item.remove());
    this._itemCount = 0;

    this._decoration.margin.updateHeight();
  };

  tabList.remove = function () {
    ChangesDetector.detected();

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
