import { newFutureItem } from "../TabListInit.js";
import { initFutureItemEvents } from "./TabListEvents.js";
export function addFutureItem(tabList) {
  const futureItem = newFutureItem();

  initFutureItemEvents(tabList, futureItem);

  tabList.itemWrapper.appendChild(futureItem);
  return futureItem;
}
