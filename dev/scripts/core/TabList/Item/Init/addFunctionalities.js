import { Type } from "../../../Type.js";

export function addFunctionalities(item) {
  item.setOrderNumber = function (orderNumber) {
    if (orderNumber === 0) this._order.textContent = "";
    else this._order.textContent = orderNumber + ".";
    this._orderNumber = orderNumber;
  };

  item.toggleUnordered = function () {
    this._order.classList.toggle("--hidden");
    this._contentBox.classList.toggle("list__item-content-box--offset-left");
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

  item.getContentBox = function () {
    return this._contentBox;
  };

  item.getURL = function () {
    if (this._contentBox.textContent.startsWith("https://"))
      return this._contentBox.textContent;
    else return `https://${this._contentBox.textContent}`;
  };

  item.getContent = function () {
    return this._contentBox.textContent;
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
    const contentClassList = this._contentBox.classList;

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

  item.toggleButtons = function () {
    this._deleteButton.classList.toggle("--hidden");
    this._copyButton.classList.toggle("--hidden");
  };
}
