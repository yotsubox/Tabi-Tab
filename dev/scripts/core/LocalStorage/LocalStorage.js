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
  }

  static load() {
    const savableObjectsData = getSavableObjectsData();

    SavableObjects.clear();

    for (const data of savableObjectsData) {
      ObjectLoader.parse(data);
    }

    console.log(savableObjectsData);
    console.log(storage);
  }

  static clear() {
    storage.clear();
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
