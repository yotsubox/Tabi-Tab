import { createElement } from "../Utils.js";
import { SavableObjects } from "../SaveSystem/SavableObjects.js";
import {
  addFunctionalities,
  addItemWrapper,
  addFutureItem,
  addTitle,
  newDefaultSettings,
} from "./TabListInit.js";

export function newTabList() {
  const tabList = createElement("div", "list");
  tabList._itemCount = 0;
  tabList._settings = newDefaultSettings();
  //tabList is saveable
  SavableObjects.add(tabList);

  tabList.itemWrapper = addItemWrapper(tabList);
  tabList.titleElem = addTitle(tabList); //for some reason using 'title' as variable name results in undefined value.
  tabList.futureItem = addFutureItem(tabList);

  addFunctionalities(tabList);

  return tabList;
}
