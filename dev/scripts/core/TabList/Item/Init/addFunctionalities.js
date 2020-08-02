import { Type } from "../../../Type.js";

export function addFunctionalities(item) {
  item.setOrderNumber = function (orderNumber) {
    if (orderNumber === 0) this._order.textContent = "";
    else this._order.textContent = orderNumber + ".";
    this._orderNumber = orderNumber;
  };

  /**
   * return it's parent (the list that contain itself)
   */
  item.getOwner = function () {
    return this._owner;
  };

  item.getOrderNumber = function () {
    return this._orderNumber;
  };

  item.getContentElem = function () {
    return this._content;
  };

  item.getURL = function () {
    if (this._content.textContent.startsWith("https://"))
      return this._content.textContent;
    else return `https://${this._content.textContent}`;
  };

  item.next = function () {
    const nextItem = this.nextElementSibling;
    if (this._isValidItem(nextItem)) return nextItem;
    return null;
  };

  item.prev = function () {
    const prevItem = this.previousElementSibling;
    if (this._isValidItem(prevItem)) return prevItem;
    return null;
  };

  item._isValidItem = function (item) {
    if (!item || item._type !== Type.TAB_LIST_ITEM) return false;
    return true;
  };

  item.setClickable = function (state) {
    const contentClassList = this._content.classList;

    if (state) {
      this._clickable = true;
      contentClassList.add("--clickable");
      return;
    }

    this._clickable = false;
    if (contentClassList.contains("--clickable"))
      contentClassList.remove("--clickable");
  };

  item.isClickable = function () {
    return this._clickable;
  };

  item.toggleURLHeaderTitleBox = function () {
    this._titleBox.classList.toggle("--collapse");
  };

  item.updateTitleBox = function () {
    this._titleBox.updateTitle();
  };
}
