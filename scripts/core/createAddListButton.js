import { createNewList } from "./createNewList.js";

/**
 * add new list to parent.
 * @param {MouseEvent} event
 */
function addNewList(event) {
  const listElem = createNewList();

  const listsElem = this.parentElement;
  listsElem.insertBefore(listElem, this);
}

/**
 * create new "add new list" button.
 * @param {HTMLElement} appendTarget append to given target (default: null).
 */
export function createAddListButton(appendTarget = null) {
  const addListButton = document.createElement("button");
  addListButton.className = "btn btn--padding";
  addListButton.textContent = "Add new list";

  //functionalities
  addListButton.addEventListener("click", addNewList);

  if (appendTarget) appendTarget.appendChild(addListButton);
  return addListButton;
}
