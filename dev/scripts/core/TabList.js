import { createElement } from "./Utils.js";
import { SavableObjects, ChangesDetector } from "./SaveSystem.js";
import {
  addFunctionalities,
  addEventListeners,
  decorate,
  initProperties,
  initPropertiesFromJSON,
  addItemsToTabListFromItemContents,
  assembleComponentsAndAppend,
} from "./TabList/Init.js";

export class TabList {
  static _createTabListElement() {
    return createElement("div", "list");
  }
  static Create(appendTarget) {
    ChangesDetector.detected();
    const tabList = TabList._createTabListElement();
    SavableObjects.add(tabList);

    addFunctionalities(tabList);
    addEventListeners(tabList);
    initProperties(tabList);
    assembleComponentsAndAppend(tabList, appendTarget);

    tabList._decoration.margin.updateHeight();
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

    tabList._decoration.margin.updateHeight();
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
