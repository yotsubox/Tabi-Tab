import { newTabList } from "../TabList/newTabList.js";

export function addNewListEvent() {
  const listElem = newTabList();
  const listsElem = this.previousElementSibling;

  //insert list before button.
  listsElem.appendChild(listElem);
}
