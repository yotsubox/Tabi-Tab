import { createElement } from "./Utils.js";
import { SavableObjects } from "./SaveSystem.js";
import {
  ItemWrapper,
  FutureItem,
  Title,
  addFunctionalities,
  newDefaultSettings,
} from "./TabList/Init.js";

export class TabList {
  static NewTabList() {
    const tabList = createElement("div", "list");
    tabList._itemCount = 0;
    tabList._settings = newDefaultSettings();
    //tabList is saveable
    SavableObjects.add(tabList);

    tabList.itemWrapper = ItemWrapper.Create(tabList);

    //for some reason using 'title' as variable name results in undefined value.
    tabList.titleElem = Title.Create(tabList);

    tabList.futureItem = FutureItem.Create(tabList);

    addFunctionalities(tabList);

    return tabList;
  }

  static FromJSON(tabListJSON) {
    const tabList = createElement("div", "list");
    tabList._itemCount = 0;
    tabList._settings = tabListJSON.settings;

    SavableObjects.add(tabList);

    tabList.itemWrapper = ItemWrapper.Create(tabList);

    //for some reason using 'title' as variable name results in undefined value.
    tabList.titleElem = Title.Create(tabList, tabListJSON.titleName);

    tabList.futureItem = FutureItem.Create(tabList);

    addFunctionalities(tabList);

    //append items to list.
    for (const url of tabListJSON.urls) {
      const item = tabList.newItem(url);
      tabList.itemWrapper.insertBefore(item, tabList.futureItem);
    }

    return tabList;
  }
}
