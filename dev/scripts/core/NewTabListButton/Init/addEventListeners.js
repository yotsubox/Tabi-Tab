import { TabList } from "../../TabList.js";
import { listContainer, background } from "../../../main.js";

export function addEventListeners(addListButton) {
  addListButton.addEventListener("click", createNewTabList);
}

function createNewTabList() {
  const tabList = TabList.Create(listContainer);
  listContainer.appendChild(tabList);
  background.updatePosition();
}
