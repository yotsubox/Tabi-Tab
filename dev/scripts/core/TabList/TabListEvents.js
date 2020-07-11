import { Menu } from "./Menu.js";
import { makeElementEditable } from "../utils/makeElementEditable.js";

let draggedItem = null;
let draggedOverItem = null;
export function initItemEvents(list, item, itemWrapper, futureItem) {
  const itemContent = item.getContentElem();

  makeElementEditable(itemContent);
  //edit content event
  itemContent.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;

    if (list.getItemCount() === item.getOrderNumber()) futureItem.focus();

    itemContent.textContent = itemContent.textContent.trim();

    if (!itemContent.textContent.length) {
      list.removeItem(item);
      fixOrderNumber();
    }
  });

  //dragging events
  item.addEventListener("dragstart", (e) => {
    draggedItem = item;
    item.getContentElem().classList.add("list__item-content--dragging");

    //blank image element as "ghost" image
    e.dataTransfer.setDragImage(document.createElement("img"), 0, 0);
  });

  item.addEventListener("dragover", (e) => {
    e.preventDefault();

    const box = item.getBoundingClientRect();
    const offsetY = e.clientY - box.top - box.height / 2;

    if (offsetY < 0) {
      if (draggedOverItem === item) return;
      itemWrapper.insertBefore(draggedItem, item);

      draggedOverItem = draggedItem;
    } else {
      const nextItem = item.nextElementSibling;
      if (draggedOverItem === nextItem) return;
      itemWrapper.insertBefore(draggedItem, nextItem);

      draggedOverItem = nextItem;
    }

    fixOrderNumber();
  });

  item.addEventListener("dragend", () => {
    draggedItem
      .getContentElem()
      .classList.remove("list__item-content--dragging");
    //clean up
    draggedItem = null;
  });

  function fixOrderNumber() {
    // -1 and i = 1 to exclude title and future item
    const range = itemWrapper.children.length - 1;
    for (let i = 1; i < range; i++) {
      const item = itemWrapper.children[i];
      item.setOrderNumber(i);
    }
  }
}

export function initFutureItemEvents(list, futureItem) {
  futureItem.addEventListener("keydown", (e) =>
    newItemEvent(e, futureItem, list)
  );

  function newItemEvent(e, futureItem, list) {
    if (e.key !== "Enter") return;

    //if pressed enter but content is empty, prevent line-break
    futureItem.textContent = futureItem.textContent.trim();
    if (!futureItem.textContent.length) {
      e.preventDefault();
      return;
    }

    const item = list.newListItem();

    //transfer text to newly created item and append.
    const itemContent = item.children[1];
    itemContent.textContent = futureItem.textContent;
    futureItem.textContent = "";

    list._itemWrapper.insertBefore(item, futureItem);

    //prevent line-break
    e.preventDefault();
  }
}

export function menuEvent(e) {
  e.preventDefault();
  const oldScrollX = window.scrollX;
  const oldScrollY = window.scrollY;

  new Menu(e.clientX + oldScrollX, e.clientY + oldScrollY, this);

  //keep scroll at old position after creating menu.
  window.scrollTo(oldScrollX, oldScrollY);
}
