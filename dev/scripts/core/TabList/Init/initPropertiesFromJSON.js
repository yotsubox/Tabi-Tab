import { ItemContainer, FutureItem, Title, MinimizeButton } from "../Init.js";
import { Type } from "../../Type.js";

export function initPropertiesFromJSON(tabList, tabListJSON) {
  tabList._type = Type.TAB_LIST;
  tabList._itemCount = 0;
  tabList._settings = tabListJSON.settings;
  tabList._minimizeButton = MinimizeButton.Create(tabList);
  tabList._itemContainer = ItemContainer.Create(tabList);
  //for some reason using 'title' as variable name results in undefined value.
  tabList._title = Title.Create(tabList, tabListJSON.titleName);
  tabList._futureItem = FutureItem.Create(tabList);
}
