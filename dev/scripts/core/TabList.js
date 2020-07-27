import { createElement } from "./Utils.js";
import { SavableObjects, ChangesDetector } from "./SaveSystem.js";
import {
  addFunctionalities,
  initProperties,
  initPropertiesFromJSON,
  addItemsToTabListFromURLs,
  assembleComponentsAndAppend,
} from "./TabList/Init.js";

export class TabList {
  static Create(appendTarget) {
    ChangesDetector.detected();

    const tabList = createElement(
      "div",
      "list --tab-list-un-minimize-animation"
    );
    SavableObjects.add(tabList);

    addFunctionalities(tabList);
    initProperties(tabList);
    assembleComponentsAndAppend(tabList, appendTarget);

    return tabList;
  }

  static FromJSON(appendTarget, tabListJSON) {
    ChangesDetector.detected();

    const tabList = createElement(
      "div",
      "list --tab-list-un-minimize-animation"
    );
    SavableObjects.add(tabList);

    addFunctionalities(tabList);
    initPropertiesFromJSON(tabList, tabListJSON);
    assembleComponentsAndAppend(tabList, appendTarget);
    addItemsToTabListFromURLs(tabList, tabListJSON.urls);

    return tabList;
  }
}
