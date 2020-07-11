import { createElement } from "../utils/createElement.js";
import { makeElementEditable } from "../utils/makeElementEditable.js";
import {
  menuEvent,
  initItemEvents,
  initFutureItemEvents,
} from "./TabListEvents.js";
import { newItem } from "./newItem.js";

export class TabList {
  constructor() {
    this.elem = createElement("div", "list");
    this._itemCount = 0;

    this._itemWrapper = this._addItemWrapper();
    this._title = this._addTitle();
    this._futureItem = this._addFutureItem();

    this.elem.addEventListener("contextmenu", menuEvent);
  }

  _addItemWrapper() {
    const itemWrapper = createElement("div", "list__item-wrapper");
    this.elem.appendChild(itemWrapper);

    return itemWrapper;
  }

  _addTitle() {
    const title = document.createElement("div");
    title.className = "list__title";
    title.textContent = "Title";

    makeElementEditable(title);

    title.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && this._itemCount === 0) this._futureItem.focus();
    });

    this._itemWrapper.appendChild(title);
    return title;
  }

  _addFutureItem() {
    const futureItem = createElement("div", "list__item list__item--add-more");
    futureItem.contentEditable = "true"; //make editable

    initFutureItemEvents(this, futureItem);

    this._itemWrapper.appendChild(futureItem);
    return futureItem;
  }

  newListItem() {
    this._itemCount++;
    const item = newItem(this._itemCount);
    initItemEvents(this, item, this._itemWrapper, this._futureItem);
    return item;
  }

  getItemCount() {
    return this._itemCount;
  }

  removeItem(item) {
    item.remove();
    this._itemCount--;
  }
}
