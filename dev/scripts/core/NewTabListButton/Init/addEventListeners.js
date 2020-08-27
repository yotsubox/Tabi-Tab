import { TabList } from "../../TabList.js";
import { listContainer, background, navigationLine, notificationManager } from "../../../main.js";
import { add } from "../../ImagePaths.js";

export function addEventListeners(addListButton) {
  addListButton.addEventListener("click", createNewTabList);
}

function createNewTabList() {
  const tabList = TabList.Create(listContainer);

  const prevTop = this.getBoundingClientRect().top;
  listContainer.appendChild(tabList);
  window.scrollBy(0, this.getBoundingClientRect().top - prevTop);

  navigationLine.add(tabList);
  background.updatePosition();
  notificationManager.newNotification("New list created!", add);
}
