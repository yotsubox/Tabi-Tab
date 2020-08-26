import { createElement } from "./createElement.js";
import { LocalStorage } from "../SaveSystem/LocalStorage.js";
import { UInt8ArrayConverter } from "./UInt8ArrayConverter.js";
import { ChangesDetector } from "../SaveSystem/ChangesDetector.js";
import { notificationManager } from "../../main.js";
import { submit, save, remove } from "../ImagePaths.js";

export class LoadButton {
  static FromExistingElem(loadButton) {
    addEventListeners(loadButton);
  }
}

function addEventListeners(loadButton) {
  loadButton.addEventListener("click", openAndLoad);
}

function openAndLoad(e) {
  const input = createElement("input");
  input.type = "file";
  input.addEventListener("change", (e) => {
    readAndLoadSaveFile(e);
  });

  input.click();
}

function readAndLoadSaveFile(e) {
  const saveFile = e.target.files[0];

  const reader = new FileReader();
  reader.readAsText(saveFile);
  reader.onload = loadSaveFile;
}

function loadSaveFile(e) {
  const encryptedData = e.target.result;

  const buffer = UInt8ArrayConverter.fromBinaryString(encryptedData);

  let loadedSaveData;
  try {
    loadedSaveData = JSON.parse(new TextDecoder().decode(buffer));
    if (!isSaveDataValid(loadedSaveData)) throw Error("Invalid File");
  } catch (e) {
    notificationManager.newNotification("Error: Invalid File... (・−・;)", remove, 4000);
    return;
  }

  LocalStorage.setSaveData(loadedSaveData);
  LocalStorage.load();

  ChangesDetector.detected();
  LocalStorage.save();

  notificationManager.newNotification("Loaded!", submit);
}

function isSaveDataValid(saveData) {
  if (!saveData) return false;

  if (saveData.tabLists && saveData.timestamp && saveData.greetings) return true;

  return false;
}
