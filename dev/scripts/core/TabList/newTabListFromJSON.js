import { createElement } from "../Utils.js";
import { SavableObjects } from "../SaveSystem/SavableObjects.js";
import {
  addFunctionalities,
  addItemWrapper,
  addFutureItem,
  addTitle,
} from "./TabListInit.js";

export function newTabListFromJSON(tabListJSON) {
  const tabList = createElement("div", "list");
  tabList._itemCount = 0;
  tabList._settings = tabListJSON.settings;

  SavableObjects.add(tabList);

  tabList.itemWrapper = addItemWrapper(tabList);
  tabList.titleElem = addTitle(tabList, tabListJSON.titleName); //for some reason using 'title' as variable name results in undefined value.

  tabList.futureItem = addFutureItem(tabList);

  addFunctionalities(tabList);

  //append items to list.
  for (const url of tabListJSON.urls) {
    const item = tabList.newListItem(url);
    tabList.itemWrapper.insertBefore(item, tabList.futureItem);
  }

  return tabList;
}
