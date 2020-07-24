import { ChangesDetector } from "../../SaveSystem/ChangesDetector.js";
import { LocalStorage } from "../../SaveSystem/LocalStorage.js";

export function initSaveButtonEvents(saveButton) {
  ChangesDetector.addEventListener(
    "onChange",
    saveButton.toggleGrayScale,
    saveButton,
    false
  );

  //when saved, remove gray scale.
  ChangesDetector.addEventListener(
    "onSave",
    saveButton.toggleGrayScale,
    saveButton,
    true
  );

  saveButton.addEventListener("click", () => {
    if (!ChangesDetector.haveChangesBeenMade()) return;

    LocalStorage.save();
  });
}
