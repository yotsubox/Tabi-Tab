import { addNewListEvent } from "./AddListButtonEvents.js";

/**
 * create new "add new list" button.
 * @param {HTMLElement} appendTarget append to given target (default: null).
 */
export function newAddListButton(appendTarget = null) {
  const addListButton = document.createElement("button");
  addListButton.className = "btn btn--padding";
  addListButton.textContent = "Add new list";

  //functionalitiesP
  addListButton.addEventListener("click", addNewListEvent);

  addListButton.addList = function (list) {
    const listsElem = this.previousElementSibling;
    //insert list before button.
    listsElem.appendChild(list);
  };

  if (appendTarget) appendTarget.appendChild(addListButton);

  return addListButton;
}
