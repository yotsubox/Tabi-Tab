import { ChangesDetector, LocalStorage } from "../../SaveSystem.js";
import { EventType } from "../../SaveSystem/ChangesDetector/EventType.js";
import { notificationManager } from "../../../main.js";
import { submit } from "../../ImagePaths.js";

export function addEventListeners(saveButton) {
  ChangesDetector.addEventListener(EventType.CHANGED, () => saveButton.setSavable(true));

  //when saved, remove gray scale.
  ChangesDetector.addEventListener(EventType.SAVED, () => saveButton.setSavable(false));

  saveButton.addEventListener("click", () => {
    if (!ChangesDetector.hasChangesBeenMade()) return;

    LocalStorage.save();
    notificationManager.newNotification("Saved!", submit);
  });
}
