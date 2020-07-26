import { ChangesDetector } from "../../../SaveSystem.js";
import { insertElementAfter } from "../../../Utils.js";
import { insertElementBefore } from "../../../Utils/insertElementBefore.js";

// GLOBAL VARIABLES USED FOR ALL ITEMS
let draggedItem = null;
let draggedOverItem = null;

export function addEventListeners(item) {
  const contentBox = item.getContentElem();

  contentBox.addEventListener("keydown", (e) => blurWhenPressEnter(e, item));

  contentBox.addEventListener("blur", () => cleanUp(item));

  //dragging events
  item.addEventListener("dragstart", (e) => showDraggingEffect(e, item));

  item.addEventListener("dragover", (e) => moveItemAway(e, item));

  item.addEventListener("dragend", removeDraggingEffect);
}

//KEY DOWN EVENT
function blurWhenPressEnter(e, item) {
  if (e.key !== "Enter") {
    //saving is now available
    ChangesDetector.detected();
    return;
  }
  e.preventDefault();

  focusOnNextItem(item);

  item.getContentElem().blur(); //DO NOT MOVE THIS LINE.
}

function focusOnNextItem(item) {
  const tabList = item.getOwner();
  const futureItem = tabList.getFutureItem();

  if (tabList.getItemCount() === item.getOrderNumber()) futureItem.focus();
  else item.nextElementSibling.getContentElem().focus();
}

//BLUR
function cleanUp(item) {
  const tabList = item.getOwner();
  const itemContentBox = item.getContentElem();
  itemContentBox.textContent = itemContentBox.textContent.trim();

  //if item is empty, remove and focus on next item.
  if (!itemContentBox.textContent.length) {
    tabList.removeItem(item);
    fixOrderNumber(tabList);
  }
}

//DRAG EVENTS
function showDraggingEffect(e, item) {
  draggedItem = item;
  item.getContentElem().classList.add("list__item-contentBox--dragging");

  //blank image element as "ghost" image
  e.dataTransfer.setDragImage(document.createElement("img"), 0, 0);
}

function removeDraggingEffect() {
  {
    ChangesDetector.detected();

    draggedItem
      .getContentElem()
      .classList.remove("list__item-contentBox--dragging");
    //clean up
    draggedItem = null;
  }
}

function moveItemAway(e, item) {
  e.preventDefault();

  const box = item.getBoundingClientRect();
  const offsetY = e.clientY - (box.top + box.height / 2);
  const draggedItemIsOnTopOfItem = offsetY < 0;

  if (draggedItemIsOnTopOfItem) putDraggedItemOnTopOf(item);
  else putDraggedItemOnBottomOf(item);
}

function putDraggedItemOnTopOf(item) {
  if (draggedOverItem === item) return;
  draggedOverItem = item;

  insertElementBefore(item, draggedItem);
  fixOrderNumber(item.getOwner());
}

function putDraggedItemOnBottomOf(item) {
  if (draggedOverItem === draggedItem) return;
  draggedOverItem = draggedItem;

  insertElementAfter(item, draggedItem);
  fixOrderNumber(item.getOwner());
}

//OTHERS
function fixOrderNumber(tabList) {
  const itemWrapper = tabList.getItemWrapper();
  // -1 and i = 1 to exclude title and future item
  const range = itemWrapper.children.length - 1;
  for (let i = 1; i < range; i++) {
    const item = itemWrapper.children[i];
    item.setOrderNumber(i);
  }
}
