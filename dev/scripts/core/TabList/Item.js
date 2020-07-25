import { createElement } from "../Utils.js";
import { makeElementEditable } from "../Utils/makeElementEditable.js";
import { addFunctionalities } from "./Item/Init.js";

export class Item {
  static Create(orderNumber, url = "") {
    const item = createElement("div", "list__item");
    item.draggable = true;

    item._orderNumber = orderNumber;
    // layout:
    // <order>. <contentBox>
    // e.g: 9. worms.com
    const order = createElement("div", "list__item-order");
    order.textContent = orderNumber + ".";
    item._order = order;

    const contentBox = createElement("div", "list__item-contentBox");
    makeElementEditable(contentBox);

    contentBox.textContent = url;
    item._content = contentBox;

    item.appendChild(order);
    item.appendChild(contentBox);

    addFunctionalities(item);

    return item;
  }
}
