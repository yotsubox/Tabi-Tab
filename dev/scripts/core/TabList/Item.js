import { createElement } from "../Utils.js";
import { makeElementEditable } from "../Utils/makeElementEditable.js";
import { addFunctionalities, addEventListeners } from "./Item/Init.js";
import { Type } from "../Type.js";
import { TitleBox } from "./Item/TitleBox.js";
import { insertElementBefore } from "../Utils/insertElementBefore.js";

export class Item {
  static Create(tabList, orderNumber, url = "") {
    const item = createElement("div", "list__item");
    insertElementBefore(tabList.getFutureItem(), item);

    item.draggable = true;

    item._type = Type.TAB_LIST_ITEM;
    item._orderNumber = orderNumber;
    item._owner = tabList;
    item._mouseOver = false;
    item._clickable = false;
    // layout:
    // <order>. <contentBox>
    // e.g: 9. worms.com
    const order = createElement("div", "list__item-order");
    order.textContent = orderNumber + ".";
    item._order = order;

    const contentBox = createElement("div", "list__item-content-box");
    makeElementEditable(contentBox);

    contentBox.textContent = url;
    item._content = contentBox;

    item.appendChild(order);
    item.appendChild(contentBox);

    addFunctionalities(item);
    addEventListeners(item);

    item._titleBox = TitleBox.Create(item);
    item._titleBox.classList.add("--collapse");

    return item;
  }
}
