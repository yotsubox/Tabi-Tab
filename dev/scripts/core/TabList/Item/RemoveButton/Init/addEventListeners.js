import { notificationManager } from "../../../../../main.js";
import { remove } from "../../../../ImagePaths.js";

export function addEventListeners(removeButton) {
  //mousedown happens before click (click is after blur, which hides the button away)
  removeButton.addEventListener("mousedown", (e) => {
    e.preventDefault();

    //0 = left click
    if (e.button !== 0) return;

    const prevScrollY = window.scrollY;

    focusOnNextItem(removeButton);

    removeButton.deleteItem();
    notificationManager.newNotification("Item removed", remove);

    window.scrollTo(0, prevScrollY);
  });
}

function focusOnNextItem(removeButton) {
  const nextItem = removeButton.getOwner().next();
  if (nextItem) nextItem.getContentBox().focus();
}
