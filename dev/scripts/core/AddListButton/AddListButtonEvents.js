import { newTabList } from "../TabList/newTabList.js";
import { ChangesDetector } from "../SaveSystem/ChangesDetector.js";

export function addNewListEvent() {
  ChangesDetector.detected();

  const listElem = newTabList();

  this.addList(listElem);
}
