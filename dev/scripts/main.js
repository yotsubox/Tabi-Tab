import { newAddListButton } from "./core/AddListButton/newAddListButton.js";
import { LocalStorage } from "./core/SaveSystem/LocalStorage.js";
import { saveWhenCtrlS, saveEveryTenSec } from "./core/Events.js";
import { SaveButton } from "./core/SaveButton/SaveButton.js";

//BASIC FUNCTIONALITIES.
saveWhenCtrlS();
saveEveryTenSec();

//MAIN COMPONENTS.
export const saveButton = SaveButton.FromExistingElem(
  document.querySelector(".save-btn")
);
export const listsWrapper = document.querySelector(".lists-wrapper");
export const addListButton = newAddListButton(listsWrapper);

//LOAD PREVIOUSLY SAVE OBJECTS.
LocalStorage.load();

//DEBUG
