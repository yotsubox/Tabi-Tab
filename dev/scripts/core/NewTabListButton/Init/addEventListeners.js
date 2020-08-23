import { TabList } from "../../TabList.js";
import { listContainer, background, navigationLine, notificationManager } from "../../../main.js";
import { add } from "../../ImagePaths.js";

export function addEventListeners(addListButton) {
  addListButton.addEventListener("click", createNewTabList);
}

function createNewTabList() {
  const tabList = TabList.Create(listContainer);
  listContainer.appendChild(tabList);
  navigationLine.add(tabList);
  background.updatePosition();
  notificationManager.newNotification("New list created!", add);
}
