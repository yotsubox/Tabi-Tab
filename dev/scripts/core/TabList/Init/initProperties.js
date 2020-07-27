import {
  ItemContainer,
  FutureItem,
  Title,
  MinimizeButton,
  newDefaultSettings,
} from "../Init.js";

export function initProperties(tabList) {
  tabList._itemCount = 0;
  tabList._settings = newDefaultSettings();
  tabList._minimizeButton = MinimizeButton.Create(tabList);
  tabList._itemContainer = ItemContainer.Create(tabList);
  //for some reason using 'title' as variable name results in undefined value.
  tabList._title = Title.Create(tabList);
  tabList._futureItem = FutureItem.Create(tabList);
}
