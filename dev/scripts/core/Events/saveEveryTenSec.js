import { LocalStorage } from "../SaveSystem.js";
import { ChangesDetector } from "../SaveSystem/ChangesDetector.js";
import { notificationManager } from "../../main.js";
import { saved } from "../ImagePaths.js";

export function saveEveryTenSec() {
  setTimeout(function repeat() {
    if (ChangesDetector.hasChangesBeenMade()) makeNotification();
    LocalStorage.save();

    setTimeout(repeat, 10000);
  }, 10000);
}

function makeNotification() {
  notificationManager.newNotification("Autosaved.", saved);
}
