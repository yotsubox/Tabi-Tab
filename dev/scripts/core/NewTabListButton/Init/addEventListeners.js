import { TabList } from "../../TabList.js";
import { ChangesDetector } from "../../SaveSystem.js";

export function addEventListeners(addListButton) {
  addListButton.addEventListener("click", addNewListEvent);
}

function addNewListEvent() {
  ChangesDetector.detected();

  const listElem = TabList.NewTabList();
  this.addList(listElem);
}
