import { SavableObjects } from "./SavableObjects.js";
import { ObjectLoader } from "./ObjectLoader.js";
import { ChangesDetector } from "./ChangesDetector.js";

const storage = window.localStorage;
let saveData = storage.getItem("saveData") ? JSON.parse(storage.getItem("saveData")) : {};

export class LocalStorage {
  /**
   * save changes.
   * @returns {boolean} returns true if changes are saved. false if there are no changes or failed to save.
   */
  static save() {
    //if nothing has changed, do nothing.
    if (!ChangesDetector.hasChangesBeenMade()) return false;
    _updateSaveData();
    _putToStorage();
    //things are now unchanged.
    ChangesDetector.resetState();

    return true;
  }

  static load() {
    _removeCurrentlyRunningToBeReplacedObjects();
    SavableObjects.clear();

    if (saveData.tabLists)
      for (const tabListData of saveData.tabLists) {
        ObjectLoader.parse(tabListData);
      }
  }

  static _clear() {
    storage.clear();
  }

  static updateTimestamp() {
    const now = Date.now();

    //first time.
    if (!saveData.timestamp) {
      saveData.timestamp = {
        timestampPassedSinceLastOpened: 0,
        lastOpenedTimestamp: now,
      };
    }

    saveData.timestamp = {
      timestampPassedSinceLastOpened: now - saveData.timestamp.lastOpenedTimestamp,
      lastOpenedTimestamp: now,
    };

    _putToStorage();
  }

  static initGreetingIndicesArray() {
    if (saveData.greetings) return;

    //first time
    saveData.greetings = {
      greetingIndices: [],
      extraLineIndices: [],
      longTimeGreetingIndices: [],
      longTimeExtraLineIndices: [],
    };
  }

  static getSaveData() {
    return saveData;
  }

  static setSaveData(newSaveData) {
    saveData = newSaveData;
  }
}

//
function _updateSaveData() {
  const timestampData = saveData.timestamp;
  const greetingsData = saveData.greetings;
  LocalStorage._clear();

  saveData.timestamp = timestampData;
  saveData.greetings = greetingsData;
  saveData.tabLists = _getTabListSavableForms();
}

function _putToStorage() {
  storage.setItem("saveData", JSON.stringify(saveData));
}

function _removeCurrentlyRunningToBeReplacedObjects() {
  for (const tabList of SavableObjects.getTabLists()) {
    tabList.remove();
  }
}

function _getTabListSavableForms() {
  const savableForms = [];
  for (const tabList of SavableObjects.getTabLists()) {
    savableForms.push(tabList.toSavableForm());
  }

  return savableForms;
}
