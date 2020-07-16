import { newAddListButton } from "./core/AddListButton/newAddListButton.js";
import { LocalStorage } from "./core/LocalStorage/LocalStorage.js";
import { SavableObjects } from "./core/LocalStorage/SavableObjects.js";

const listsWrapper = document.querySelector(".lists-wrapper");
//add existing lists

//"add list" button.
export const addListButton = newAddListButton(listsWrapper);

//DEBUG
addListButton.dispatchEvent(new MouseEvent("click"));

document.body.addEventListener("contextmenu", () => {
  LocalStorage.save();
  LocalStorage.load();
});
