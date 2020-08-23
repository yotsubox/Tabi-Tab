import { LocalStorage } from "../SaveSystem.js";
import { notificationManager } from "../../main.js";
import { submit } from "../ImagePaths.js";
import { ChangesDetector } from "../SaveSystem/ChangesDetector.js";
/**
 *
 * @param {KeyboardEvent} e
 */
export function saveWhenCtrlS() {
  document.body.addEventListener("keydown", (e) => {
    if (e.shiftKey || e.altKey) return;
    if (!e.ctrlKey || (e.key !== "s" && e.key !== "S")) return;

    e.preventDefault();
    if (ChangesDetector.hasChangesBeenMade()) notificationManager.newNotification("Saved!", submit);
    LocalStorage.save();
  });
}
