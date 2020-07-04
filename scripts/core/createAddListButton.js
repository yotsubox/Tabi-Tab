import { TabList } from "./TabList/TabList.js";

/**
 * create new "add new list" button.
 * @param {HTMLElement} appendTarget append to given target (default: null).
 */
export function createAddListButton(appendTarget = null) {
  const addListButton = document.createElement("button");
  addListButton.className = "btn btn--padding";
  addListButton.textContent = "Add new list";

  //functionalities
  addListButton.addEventListener("click", addNewListEvent);

  if (appendTarget) appendTarget.appendChild(addListButton);
  return addListButton;
}

function addNewListEvent() {
  const button = this;
  const listElem = new TabList().elem;
  const listsElem = button.parentElement;

  //insert list before button.
  listsElem.insertBefore(listElem, button);
}
