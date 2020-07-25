export function addFunctionalities(item) {
  item.setOrderNumber = function (orderNumber) {
    if (orderNumber === 0) item._order.textContent = "";
    else item._order.textContent = orderNumber + ".";
    item._orderNumber = orderNumber;
  };

  item.getOrderNumber = function () {
    return item._orderNumber;
  };

  item.getContentElem = function () {
    return item._content;
  };

  item.getURL = function () {
    return item._content.textContent;
  };
}
