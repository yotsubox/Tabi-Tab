import { createElement } from "../Utils.js";
import { addFunctionalities, addEventListeners } from "./Item/Init.js";
import { Type } from "../Type.js";
import { ContentBox } from "./Item/contentBox.js";
import { RemoveButton } from "./Item/RemoveButton.js";
import { CopyButton } from "./Item/CopyButton.js";

export class Item {
  static Create(tabList, orderNumber, textContent = "") {
    const item = createElement("div", "list__item");

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
    item._removeButton = RemoveButton.Create(item);
    item._copyButton = CopyButton.Create(item);

    assembleComponents(item);
    addFunctionalities(item);
    addEventListeners(item);

    return item;
  }
}

function assembleComponents(item) {
  item.appendChild(item._order);
  item.appendChild(item._contentBox);
  item.appendChild(item._removeButton);
  item.appendChild(item._copyButton);
}
