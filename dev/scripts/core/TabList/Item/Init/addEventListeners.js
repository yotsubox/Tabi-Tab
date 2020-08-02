import { ChangesDetector } from "../../../SaveSystem.js";
import { insertElementAfter, insertElementBefore } from "../../../Utils.js";

// GLOBAL VARIABLE USED FOR ALL ITEMS
let draggedItem = null;

export function addEventListeners(item) {
  const contentBox = item.getContentBox();

  contentBox.addEventListener("keydown", (e) => {
    detectChanges(e);
    doThingsWhenCertainKeysIsPressed(e, item);
  });

  contentBox.addEventListener("focus", () => item.toggleButtons());

  contentBox.addEventListener("blur", () => {
    item.toggleButtons();
    cleanUp(item);
  });

  contentBox.addEventListener("click", () => openLinkInNewTabIfClickable(item));

  item.addEventListener("dragstart", (e) => showDraggingEffect(e, item));

  item.addEventListener("dragover", (e) => moveItemAway(e, item));

  item.addEventListener("dragend", removeDraggingEffect);

  item.addEventListener("mouseenter", (e) => {
    item._mouseOver = true;
    item.toggleURLHeaderTitleBox();
  });
  item.addEventListener("mouseleave", () => {
    item._mouseOver = false;
    item.setClickable(false);
    item.toggleURLHeaderTitleBox();
  });

  document.addEventListener("keydown", (e) => clickableWhenCtrl(e, item));
  document.addEventListener("keyup", (e) =>
    notClickableWhenReleaseCtrl(e, item)
  );
}

//KEY DOWN EVENTS
function doThingsWhenCertainKeysIsPressed(e, item) {
  if (e.key === "Enter") {
    e.preventDefault();
    focusOnNextItemOf(item);
    item.updateTitleBox();
  }

  if (e.altKey && e.code === "ArrowUp") {
    putItemOnTopOf(item.prev(), item);
    item.getContentBox().focus();
  }

  if (e.altKey && e.code === "ArrowDown") {
    putItemOnBottomOf(item.next(), item);
    item.getContentBox().focus();
  }

  if (!e.altKey && e.code === "ArrowUp") focusOnPrevItemOf(item);
  if (!e.altKey && e.code === "ArrowDown") focusOnNextItemOf(item);
}

function detectChanges(e) {
  if (ChangesDetector.isKeyCauseChanges(e.key)) ChangesDetector.detected();
}

function focusOnNextItemOf(item) {
  const nextItem = item.next();

  if (nextItem) nextItem.getContentBox().focus();
  else item.getOwner().getFutureItem().focus();
}

function focusOnPrevItemOf(item) {
  const prevItem = item.prev();

  if (prevItem) prevItem.getContentBox().focus();
  else item.getOwner().getTitle().focus();
}

function clickableWhenCtrl(e, item) {
  if (item._mouseOver && e.ctrlKey) item.setClickable(true);
}

function notClickableWhenReleaseCtrl(e, item) {
  if (item._mouseOver && e.code === "ControlLeft") item.setClickable(false);
}

function openLinkInNewTabIfClickable(item) {
  if (item.isClickable()) window.open(item.getURL());
}

//BLUR
function cleanUp(item) {
  const tabList = item.getOwner();
  const itemContentBox = item.getContentBox();
  itemContentBox.textContent = itemContentBox.textContent.trim();

  //if item is empty, remove and focus on next item.
  if (!itemContentBox.textContent.length) tabList.removeItem(item);
}

//DRAG EVENTS
function showDraggingEffect(e, item) {
  draggedItem = item;
  item.getContentBox().classList.add("list__item-content-box--dragging");

  //blank image element as "ghost" image
  e.dataTransfer.setDragImage(document.createElement("img"), 0, 0);
}

function removeDraggingEffect() {
  {
    ChangesDetector.detected();

    draggedItem
      .getContentBox()
      .classList.remove("list__item-content-box--dragging");
    //clean up
    draggedItem = null;
  }
}

function moveItemAway(e, item) {
  e.preventDefault();

  //not in the same tabList
  if (item.getOwner() !== draggedItem.getOwner()) return;

  const box = item.getBoundingClientRect();
  const offsetY = e.clientY - (box.top + box.height / 2);
  const draggedItemIsOnTopOfItem = offsetY < 0;

  if (draggedItemIsOnTopOfItem) putItemOnTopOf(item, draggedItem);
  else putItemOnBottomOf(item, draggedItem);
}

//OTHERS

function putItemOnTopOf(target, item) {
  if (!target || !item || target === item) return;

  insertElementBefore(target, item);
  item.getOwner().fixOrderNumber(item.getOwner());
}

function putItemOnBottomOf(target, item) {
  if (!target || !item || target === item) return;

  insertElementAfter(target, item);
  item.getOwner().fixOrderNumber(item.getOwner());
}
