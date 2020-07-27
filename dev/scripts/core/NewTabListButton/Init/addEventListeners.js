import { TabList } from "../../TabList.js";
import { listContainer } from "../../../main.js";

export function addEventListeners(addListButton) {
  addListButton.addEventListener("click", createNewTabList);
}

function createNewTabList() {
  const tabList = TabList.Create(listContainer);
}
