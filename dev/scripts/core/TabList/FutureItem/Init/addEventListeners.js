import { ChangesDetector } from "../../../SaveSystem/ChangesDetector.js";

export function addEventListeners(tabList, futureItem) {
  futureItem.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") focusOnPreviousElem(tabList);
    if (e.key !== "Enter") return;

    //prevent line-break
    e.preventDefault();

    futureItem.textContent = futureItem.textContent.trim();
    newItemIfNotEmpty(tabList);
  });

  futureItem.addEventListener("blur", () => {
    futureItem.textContent = futureItem.textContent.trim();
  });
}

function focusOnPreviousElem(tabList) {
  const itemCount = tabList.getItemCount();
  if (itemCount) tabList.getItems()[itemCount - 1].getContentElem().focus();
  else tabList.getTitle().focus();
}

function newItemIfNotEmpty(tabList) {
  const futureItem = tabList.getFutureItem();

  if (!futureItem.textContent.length) return;

  ChangesDetector.detected();

  //transfer text to newly created item and append.
  tabList.newItem(futureItem.textContent);
  futureItem.textContent = "";
}
