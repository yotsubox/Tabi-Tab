import { createElement } from "./Utils.js";
import { SavableObjects, ChangesDetector } from "./SaveSystem.js";
import {
  addFunctionalities,
  initProperties,
  initPropertiesFromJSON,
  addItemsToTabListFromItemContents,
  assembleComponentsAndAppend,
} from "./TabList/Init.js";

export class TabList {
  static _createTabListElement() {
    return createElement("div", "list --tab-list-un-minimize-animation");
  }

  static Create(appendTarget) {
    ChangesDetector.detected();
    const tabList = TabList._createTabListElement();
    SavableObjects.add(tabList);

    addFunctionalities(tabList);
    initProperties(tabList);
    assembleComponentsAndAppend(tabList, appendTarget);

    return tabList;
  }

  static FromJSON(appendTarget, tabListJSON) {
    const tabList = TabList._createTabListElement();
    SavableObjects.add(tabList);

    addFunctionalities(tabList);
    initPropertiesFromJSON(tabList, tabListJSON);
    assembleComponentsAndAppend(tabList, appendTarget);
    addItemsToTabListFromItemContents(tabList, tabListJSON.itemContents);

    return tabList;
  }
}
