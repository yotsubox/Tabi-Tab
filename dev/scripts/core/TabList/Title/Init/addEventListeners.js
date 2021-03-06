import { ChangesDetector } from "../../../SaveSystem.js";

export function addEventListeners(title) {
  const tabList = title._owner;

  title.addEventListener("keydown", (e) => {
    detectChanges(e);

    if (e.key === "ArrowDown" || e.key === "Enter") {
      e.preventDefault();
      if (tabList.isMinimized() && e.key === "Enter") title.blur();
      else if (!tabList.isMinimized()) focusOnFirstItem(tabList);
    }
  });

  title.addEventListener("cut", () => ChangesDetector.detected());
  title.addEventListener("paste", () => ChangesDetector.detected());

  trimContentWhenBlur(title);
}

function focusOnFirstItem(tabList) {
  if (tabList.getItemCount() === 0) tabList.getFutureItem().getContentBox().focus();
  else tabList.getItems()[0].getContentBox().focus();
}

function detectChanges(e) {
  if (ChangesDetector.isKeyboardEventCauseChanges(e)) ChangesDetector.detected();
}

function trimContentWhenBlur(title) {
  title.addEventListener("blur", () => {
    title.textContent = title.textContent.trim();
  });
}
