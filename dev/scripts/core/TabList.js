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

    addFunctionalities(tabList);
    SavableObjects.add(tabList);

    tabList._itemWrapper = ItemWrapper.Create(tabList);

    //for some reason using 'title' as variable name results in undefined value.
    tabList._title = Title.Create(tabList);

    tabList._futureItem = FutureItem.Create(tabList);

    return tabList;
  }

  static FromJSON(tabListJSON) {
    const tabList = createElement("div", "list");
    tabList._itemCount = 0;
    tabList._settings = tabListJSON.settings;

    addFunctionalities(tabList);
    SavableObjects.add(tabList);

    tabList._itemWrapper = ItemWrapper.Create(tabList);

    //for some reason using 'title' as variable name results in undefined value.
    tabList._title = Title.Create(tabList, tabListJSON.titleName);

    tabList._futureItem = FutureItem.Create(tabList);

    addItemsToTabListFromURLs(tabList, tabListJSON.urls);

    return tabList;
  }
}

function addItemsToTabListFromURLs(tabList, urls) {
  for (const url of urls) {
    const item = tabList.newItem(url);
    tabList._itemWrapper.insertBefore(item, tabList._futureItem);
  }
}
