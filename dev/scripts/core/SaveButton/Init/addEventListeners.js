import { ChangesDetector, LocalStorage } from "../../SaveSystem.js";

export function addEventListeners(saveButton) {
  ChangesDetector.addEventListener(
    "onChange",
    saveButton.setSavable,
    saveButton,
    false
  );

  //when saved, remove gray scale.
  ChangesDetector.addEventListener(
    "onSave",
    saveButton.setSavable,
    saveButton,
    true
  );

  saveButton.addEventListener("click", () => {
    if (!ChangesDetector.haveChangesBeenMade()) return;

    LocalStorage.save();
  });
}
