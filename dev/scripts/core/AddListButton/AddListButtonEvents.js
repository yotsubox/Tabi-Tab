import { newTabList } from "../TabList/newTabList.js";

export function addNewListEvent() {
  const listElem = newTabList();

  this.addList(listElem);
}
