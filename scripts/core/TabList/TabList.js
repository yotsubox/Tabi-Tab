import { Menu } from "./Menu.js";
import { createElement } from "../utils/createElement.js";
import { makeElementEditable } from "../utils/makeElementEditable.js";

export class TabList {
  constructor() {
    this.elem = createElement("div", "list");
    this._itemCount = 0;

    this._itemWrapper = this._addItemWrapper();
    this._title = this._addTitle();
    this._futureItem = this._addButtonDiv();

    this._addMenuEvent();
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

  _addButtonDiv() {
    //'add more' button div
    const btn = createElement("div", "list__item list__item--add-more");
    btn.contentEditable = "true"; //make editable

    btn.addEventListener("keydown", (e) => addItemEvent(e, btn, this));
    this._itemWrapper.appendChild(btn);
    return btn;
  }

  _addMenuEvent() {
    this.elem.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      const oldScrollX = window.scrollX;
      const oldScrollY = window.scrollY;

      new Menu(e.clientX + oldScrollX, e.clientY + oldScrollY, this.elem);

      //keep scroll at old position after creating menu.
      window.scrollTo(oldScrollX, oldScrollY);
    });
  }

  _newListItem() {
    const item = createElement("div", "list__item");

    const order = createElement("div", "list__item-order");
    this._itemCount++;
    order.textContent = this._itemCount + ".";

    const content = createElement("div", "list__item-content");

    makeElementEditable(content);

    item.appendChild(order);
    item.appendChild(content);

    return item;
  }
}

/**
 *
 * @param {KeyboardEvent} e
 *
 */
function addItemEvent(e, btn, listObject) {
  if (e.key !== "Enter") return;

  //if pressed enter but content is empty, prevent line-break
  if (btn.textContent === "") {
    e.preventDefault();
    return;
  }

  const item = listObject._newListItem();

  //transfer text to newly created item and append.
  const itemContent = item.children[1];
  itemContent.textContent = btn.textContent;
  btn.textContent = "";

  listObject._itemWrapper.insertBefore(item, btn);

  //prevent line-break
  e.preventDefault();
}
