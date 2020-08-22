import { createElement } from "./Utils.js";
import { SavableObjects, ChangesDetector } from "./SaveSystem.js";
import {
  addFunctionalities,
  addEventListeners,
  initProperties,
  initPropertiesFromJSON,
  addItemsToTabListFromItemContents,
  assembleComponents,
} from "./TabList/Init.js";
import { listContainer } from "../main.js";

export class TabList {
  static _createTabListElement() {
    return createElement("div", "list list--start-animation");
  }
  static Create() {
    ChangesDetector.detected();

    const tabList = TabList._createTabListElement();
    SavableObjects.add(tabList);

    addFunctionalities(tabList);
    addEventListeners(tabList);
    initProperties(tabList);
    assembleComponents(tabList);
    updateMarginHeightWithoutAppend(tabList);

    return tabList;
  }

  static FromJSON(tabListJSON) {
    const tabList = TabList._createTabListElement();
    SavableObjects.add(tabList);

    addFunctionalities(tabList);
    addEventListeners(tabList);
    initPropertiesFromJSON(tabList, tabListJSON);
    assembleComponents(tabList);
    addItemsToTabListFromItemContents(tabList, tabListJSON.itemContents);
    executeOptions(tabList, tabList._settings);
    updateMarginHeightWithoutAppend(tabList);

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

function updateMarginHeightWithoutAppend(tabList) {
  listContainer.appendChild(tabList);
  tabList._decoration.margin.updateHeight();
  listContainer.removeChild(tabList);
}
