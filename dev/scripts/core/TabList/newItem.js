import { createElement } from "../Utils.js";

export function newItem(orderNumber) {
  const elem = createElement("div", "list__item");
  elem.draggable = true;

  elem._orderNumber = orderNumber;
  // layout:
  // <order>. <content>
  // e.g: 9. worms.com
  const order = createElement("div", "list__item-order");
  order.textContent = orderNumber + ".";
  elem._order = order;

  const content = createElement("div", "list__item-content");
  elem._content = content;

  elem.appendChild(order);
  elem.appendChild(content);

  elem.setOrderNumber = function (orderNumber) {
    if (orderNumber === 0) elem._order.textContent = "";
    else elem._order.textContent = orderNumber + ".";
    elem._orderNumber = orderNumber;
  };

  elem.getOrderNumber = function () {
    return elem._orderNumber;
  };

  elem.getContentElem = function () {
    return elem._content;
  };

  return elem;
}
