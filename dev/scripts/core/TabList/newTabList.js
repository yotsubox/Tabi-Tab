import { createElement } from "../Utils.js";
import { SavableObjects } from "../SaveSystem/SavableObjects.js";
import {
  addFunctionalities,
  newItemWrapper,
  newFutureItem,
  newTitle,
  newDefaultSettings,
} from "./TabListInit.js";

export function newTabList() {
  const tabList = createElement("div", "list");
  tabList._itemCount = 0;
  tabList._settings = newDefaultSettings();
  //tabList is saveable
  SavableObjects.add(tabList);

  tabList.itemWrapper = newItemWrapper(tabList);

  //for some reason using 'title' as variable name results in undefined value.
  tabList.titleElem = newTitle(tabList);

  tabList.futureItem = newFutureItem(tabList);

  addFunctionalities(tabList);

  return tabList;
}
