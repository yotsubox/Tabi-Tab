import { ItemContainer, FutureItem, Title, MinimizeButton, MinimizePadding, decorate } from "../Init.js";
import { Type } from "../../Type.js";
import { EventManager } from "../../EventManager.js";
import { EventType } from "../EventType.js";

export function initPropertiesFromJSON(tabList, tabListJSON) {
  tabList._eventManager = new EventManager(EventType);
  tabList._unorderedList = tabListJSON.settings.unorderedList;
  tabList._type = Type.TAB_LIST;
  tabList._itemCount = 0;
  tabList._decoration = decorate(tabList);
  tabList._settings = tabListJSON.settings;
  tabList._minimizeButton = MinimizeButton.Create(tabList);
  tabList._minimizePadding = MinimizePadding.Create();
  tabList._itemContainer = ItemContainer.Create(tabList);
  //for some reason using 'title' as variable name results in undefined value.
  tabList._title = Title.Create(tabList, tabListJSON.titleName);
  tabList._futureItem = FutureItem.Create(tabList);
}
