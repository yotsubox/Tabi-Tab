import { makeElementEditable } from "../../Utils.js";
import { initTitleEvents } from "./TabListEvents.js";

export function newTitle(tabList, name = "Title") {
  const title = document.createElement("div");
  title.className = "list__title";
  title.textContent = name;

  makeElementEditable(title);

  initTitleEvents(title, tabList);

  tabList.itemWrapper.appendChild(title);
  return title;
}
