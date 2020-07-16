import { Menu } from "../Menu.js";

let draggedItem = null;
let draggedOverItem = null;
export function initItemEvents(list, item, itemWrapper, futureItem) {
  const itemContent = item.getContentElem();
  //edit content event
  itemContent.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    itemContent.blur(); //DO NOT MOVE THIS LINE.

    //if item is empty, remove.
    if (!itemContent.textContent.length) {
      list.removeItem(item);
      fixOrderNumber();
    }

    if (list.getItemCount() === item.getOrderNumber()) futureItem.focus();
  });

  itemContent.addEventListener("blur", (e) => {
    itemContent.textContent = itemContent.textContent.trim();
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
  futureItem.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;

    //prevent line-break
    e.preventDefault();

    futureItem.textContent = futureItem.textContent.trim();

    //if content is empty
    if (!futureItem.textContent.length) {
      return;
    }

    newItem(e, futureItem, list);
  });

  futureItem.addEventListener("blur", () => {
    futureItem.textContent = futureItem.textContent.trim();
  });

  function newItem(e, futureItem, list) {
    const item = list.newListItem();

    //transfer text to newly created item and append.
    const itemContent = item.getContentElem();
    itemContent.textContent = futureItem.textContent;
    futureItem.textContent = "";

    list.itemWrapper.insertBefore(item, futureItem);
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
