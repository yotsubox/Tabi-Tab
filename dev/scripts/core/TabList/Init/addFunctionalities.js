import { Item, getContentsFrom } from "../Init.js";
import { ChangesDetector } from "../../SaveSystem.js";
import { SavableObjects } from "../../SaveSystem/SavableObjects.js";
import { insertElementBefore } from "../../Utils/insertElementBefore.js";
import { EventType } from "../EventType.js";
import { background } from "../../../main.js";

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
    background.updatePosition();
  };

  tabList.newItem = function (url = "") {
    this._itemCount++;
    const item = Item.Create(this, this._itemCount, url);
    insertElementBefore(tabList.getFutureItem(), item);

    if (this._settings.unorderedList) item.toggleUnordered();

    ChangesDetector.detected();
    background.updatePosition();
    return item;
  };

  tabList.toggleMinimization = function () {
    const itemContainer = this.getItemContainer();
    itemContainer.classList.toggle("--collapse");
    this._minimizePadding.classList.toggle("--collapse");

    this._settings.minimized = !this._settings.minimized;

    ChangesDetector.detected();
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
    this._eventManager.triggerEvent(EventType.REMOVED);

    if (this.parentNode) this.parentNode.removeChild(this);
    SavableObjects.remove(this);
  };

  tabList.addEventListenerExtended = function (eventType, listener) {
    this._eventManager.addEventListener(eventType, listener);
  };

  tabList.getType = function () {
    return this._type;
  };

  tabList.toSavableForm = function () {
    return {
      type: this._type,
      settings: this._settings,
      titleName: this.getTitleName(),
      itemContents: getContentsFrom(this.getItems()),
    };
  };
}
