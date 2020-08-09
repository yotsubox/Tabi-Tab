import { createElement } from "./Utils.js";
import { SavableObjects, ChangesDetector } from "./SaveSystem.js";
import {
  addFunctionalities,
  addEventListeners,
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
    addEventListeners(tabList);
    initProperties(tabList);
    assembleComponentsAndAppend(tabList, appendTarget);

    return tabList;
  }

  static FromJSON(appendTarget, tabListJSON) {
    const tabList = TabList._createTabListElement();
    SavableObjects.add(tabList);

    addFunctionalities(tabList);
    addEventListeners(tabList);
    initPropertiesFromJSON(tabList, tabListJSON);
    assembleComponentsAndAppend(tabList, appendTarget);
    addItemsToTabListFromItemContents(tabList, tabListJSON.itemContents);
    executeOptions(tabList, tabList._settings);

    return tabList;
  }
}

function executeOptions(tabList, settings) {
  if (settings.unorderedList) {
    tabList.getFutureItem().toggleUnorderedListStyle();
  }

  if (settings.minimized) {
    tabList.toggleMinimization();
    settings.minimized = true;
  }

  //changes made here do not count
  ChangesDetector.resetState();
}
