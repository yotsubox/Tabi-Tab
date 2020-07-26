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
    return this._content.textContent;
  };
}
