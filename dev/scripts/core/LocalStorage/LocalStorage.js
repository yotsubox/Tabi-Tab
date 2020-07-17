import { SavableObjects } from "./SavableObjects.js";
import { ObjectLoader } from "./ObjectLoader.js";

const storage = window.localStorage;

export class LocalStorage {
  static save() {
    let id = 0;
    for (const savable of SavableObjects) {
      //for some fucking reason, numbers (or number strings) as key do not work properly.
      storage.setItem(`+${id}`, savable.stringify());
      id++;
    }

    //DEBUG
    console.log("SAVED:");
    console.log(`savables`, SavableObjects._stack);
    console.log(`storage:`, storage);
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
