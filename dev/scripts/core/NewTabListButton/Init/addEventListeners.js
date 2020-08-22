import { TabList } from "../../TabList.js";
import { listContainer, background, navigationLine } from "../../../main.js";

export function addEventListeners(addListButton) {
  addListButton.addEventListener("click", createNewTabList);
}

function createNewTabList() {
  const tabList = TabList.Create(listContainer);
  listContainer.appendChild(tabList);
  navigationLine.add(tabList);
  background.updatePosition();
}
