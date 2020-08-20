import { ChangesDetector } from "../../../SaveSystem.js";

export function addEventListeners(title) {
  const tabList = title._owner;

  title.addEventListener("keydown", (e) => {
    detectChanges(e);

    if (e.key === "ArrowDown" || e.key === "Enter") {
      e.preventDefault();
      if (tabList.isMinimized()) title.blur();
      else focusOnFirstItem(tabList);
    }
  });

  trimContentWhenBlur(title);
}

function focusOnFirstItem(tabList) {
  if (tabList.getItemCount() === 0) tabList.getFutureItem().focus();
  else tabList.getItems()[0].getContentBox().focus();
}

function detectChanges(e) {
  if (ChangesDetector.isKeyCauseChanges(e.key)) ChangesDetector.detected();
}

function trimContentWhenBlur(title) {
  title.addEventListener("blur", () => {
    title.textContent = title.textContent.trim();
  });
}
