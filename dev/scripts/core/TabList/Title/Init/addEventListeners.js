import { ChangesDetector } from "../../../SaveSystem.js";

export function addEventListeners(title, tabList) {
  title.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") {
      //saving is now available
      ChangesDetector.detected();
      return;
    }

    if (tabList.getItemCount() === 0) tabList.getFutureItem().focus();
    else title.blur();
  });

  title.addEventListener("blur", () => {
    title.textContent = title.textContent.trim();
  });
}
