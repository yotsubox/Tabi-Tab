import { LocalStorage } from "./SaveSystem/LocalStorage.js";
import { BinaryConverter } from "./SaveSystem/BinaryConverter.js";
import { notificationManager } from "../main.js";
import { download as downloadIcon } from "./ImagePaths.js";

export class GetSaveFileButton {
  static FromExistingElem(button) {
    addEventListeners(button);
  }
}

function addEventListeners(getSaveFileButton) {
  getSaveFileButton.addEventListener("click", () => {
    const encryptedSaveData = BinaryConverter.fromString(JSON.stringify(LocalStorage.getSaveData().tabLists));
    download(encryptedSaveData);
  });
}

/**
 *
 * @param {Uint8Array} data
 */
function download(data) {
  let a = document.createElement("a");

  let file = new Blob([data], { type: "application/octet-stream" });
  a.href = URL.createObjectURL(file);
  a.download = "TabiTabListGroup";
  a.click();

  notificationManager.newNotification("Save file downloaded!", downloadIcon);
}
