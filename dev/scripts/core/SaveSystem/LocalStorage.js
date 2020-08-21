import { SavableObjects } from "./SavableObjects.js";
import { ObjectLoader } from "./ObjectLoader.js";
import { ChangesDetector } from "./ChangesDetector.js";

const storage = window.localStorage;

export class LocalStorage {
  /**
   * save changes.
   * @returns {boolean} returns true if changes are saved. false if there are no changes or failed to save.
   */
  static save() {
    //if nothing has changed, do nothing.
    if (!ChangesDetector.hasChangesBeenMade()) return false;
    LocalStorage._clear();

    let id = 0;
    for (const savable of SavableObjects) {
      const savableData = savable.stringify();
      if (!savableData) continue;
      //for some fucking reason, numbers (or number strings) as key do not work properly.
      storage.setItem(`+${id}`, savableData);
      id++;
    }

    //things are now unchanged.
    ChangesDetector.resetState();

    return true;
  }

  static load() {
    const savableObjectsData = getSavableObjectsData();

    this._removeCurrentlyRunningObjects();
    SavableObjects.clear();

    for (const data of savableObjectsData) {
      ObjectLoader.parse(data);
    }
  }

  static _clear() {
    storage.clear();
  }

  static _removeCurrentlyRunningObjects() {
    for (const savable of SavableObjects) {
      savable.remove();
    }
  }
}

//
function getSavableObjectsData() {
  const savableObjectsData = [];
  for (let id = 0; id < storage.length; id++) {
    //get data
    savableObjectsData.push(JSON.parse(storage.getItem(`+${id}`)));
  }
  return savableObjectsData;
}
