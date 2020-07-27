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
    if (!ChangesDetector.haveChangesBeenMade()) return false;

    let id = 0;
    for (const savable of SavableObjects) {
      //for some fucking reason, numbers (or number strings) as key do not work properly.
      storage.setItem(`+${id}`, savable.stringify());
      id++;
    }

    //things are now unchanged.
    ChangesDetector.resetState();

    //DEBUG
    console.log("SAVED:");
    console.log(`savables`, SavableObjects._stack);
    console.log(`storage:`, storage);

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
  for (let i = 0; i < storage.length; i++) {
    //get data
    const key = storage.key(i);
    savableObjectsData.push(JSON.parse(storage.getItem(key)));
  }
  return savableObjectsData;
}
