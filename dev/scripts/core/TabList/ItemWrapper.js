import { createElement } from "../Utils/createElement.js";

export class ItemWrapper {
  static Create(tabList) {
    const itemWrapper = createElement("div", "list__item-wrapper");
    tabList.appendChild(itemWrapper);

    return itemWrapper;
  }
}
