import {
  Menu,
  ItemContainer,
  FutureItem,
  Title,
  MinimizePadding,
  MinimizeButton,
  newDefaultSettings,
  decorate,
} from "../Init.js";
import { Type } from "../../Type.js";

export function initProperties(tabList) {
  tabList._unorderedList = false;
  tabList._type = Type.TAB_LIST;
  tabList._itemCount = 0;
  tabList._decoration = decorate(tabList);
  tabList._settings = newDefaultSettings();
  tabList._minimizeButton = MinimizeButton.Create(tabList);
  tabList._minimizePadding = MinimizePadding.Create();
  tabList._itemContainer = ItemContainer.Create(tabList);
  //for some reason using 'title' as variable name results in undefined value.
  tabList._title = Title.Create(tabList);
  tabList._futureItem = FutureItem.Create(tabList);
  tabList._menu = Menu.Create(tabList, tabList._settings);
}
