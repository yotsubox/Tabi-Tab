import { ChangesDetector } from "../../SaveSystem.js";
let draggedItem = null;
let draggedOverItem = null;
export function addItemEventListeners(list, item, itemWrapper, futureItem) {
  const itemContent = item.getContentElem();
  //edit content event
  itemContent.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") {
      //saving is now available
      ChangesDetector.detected();
      return;
    }
    e.preventDefault();

    if (list.getItemCount() === item.getOrderNumber()) futureItem.focus();
    else item.nextElementSibling.getContentElem().focus();

    itemContent.blur(); //DO NOT MOVE THIS LINE.
  });

  itemContent.addEventListener("blur", (e) => {
    itemContent.textContent = itemContent.textContent.trim();

    //if item is empty, remove and focus on next item.
    if (!itemContent.textContent.length) {
      list.removeItem(item);
      fixOrderNumber();
    }
  });

  //dragging events
  item.addEventListener("dragstart", (e) => {
    draggedItem = item;
    item.getContentElem().classList.add("list__item-contentBox--dragging");

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
    ChangesDetector.detected();

    draggedItem
      .getContentElem()
      .classList.remove("list__item-contentBox--dragging");
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
