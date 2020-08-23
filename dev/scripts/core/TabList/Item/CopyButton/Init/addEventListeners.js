import { notificationManager } from "../../../../../main.js";
import { copyLink } from "../../../../ImagePaths.js";

export function addEventListeners(copyButton) {
  copyButton.addEventListener("mousedown", (e) => {
    //prevent blur on contentBox.
    e.preventDefault();

    //0 = left click
    if (e.button === 0) {
      copyButton.copyToClipboard();
      notificationManager.newNotification("Copied!", copyLink);
    }
  });
}
