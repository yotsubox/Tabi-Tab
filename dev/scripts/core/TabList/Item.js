import { createElement } from "../Utils.js";
import { addFunctionalities, addEventListeners } from "./Item/Init.js";
import { Type } from "../Type.js";
import { TitleBox } from "./Item/TitleBox.js";
import { insertElementBefore } from "../Utils/insertElementBefore.js";
import { ContentBox } from "./Item/contentBox.js";
import { DeleteButton } from "./Item/DeleteButton.js";
import { CopyButton } from "./Item/CopyButton.js";

export class Item {
  static Create(tabList, orderNumber, textContent = "") {
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
    item._order = createElement("div", "list__item-order");
    item._order.textContent = orderNumber + ".";

    item._contentBox = ContentBox.Create(item, textContent);
    item._deleteButton = DeleteButton.Create(item);
    item._copyButton = CopyButton.Create(item);

    item.appendChild(item._order);
    item.appendChild(item._contentBox);
    item.appendChild(item._deleteButton);
    item.appendChild(item._copyButton);

    addFunctionalities(item);
    addEventListeners(item);

    // THIS ONLY WORKS ONLINE SO... WASTED MY TIME FOR NOTHING.
    item._titleBox = TitleBox.Create(item);
    item._titleBox.classList.add("--collapse");

    return item;
  }
}
