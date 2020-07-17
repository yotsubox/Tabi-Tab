import { addNewListEvent } from "./AddListButtonEvents.js";

/**
 * create new "add new list" button.
 * @param {HTMLElement} appendTarget append to given target (default: null).
 */
export function newAddListButton(appendTarget = null) {
  const addListButton = document.createElement("button");

  if (appendTarget) appendTarget.appendChild(addListButton);

  addListButton.className = "btn btn--padding";
  addListButton.textContent = "Add new list";
  addListButton.listsElem = addListButton.previousElementSibling;

  //functionalitiesP
  addListButton.addEventListener("click", addNewListEvent);

  addListButton.addList = function (list) {
    //insert list before button.
    this.listsElem.appendChild(list);
  };

  return addListButton;
}
