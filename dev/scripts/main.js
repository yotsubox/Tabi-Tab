import { NewTabListButton } from "./core/NewTabListButton.js";
import { LocalStorage } from "./core/SaveSystem.js";
import { saveWhenCtrlS, saveEveryTenSec } from "./core/Events.js";
import { SaveButton } from "./core/SaveButton.js";

//BASIC FUNCTIONALITIES.
saveWhenCtrlS();
saveEveryTenSec();

//MAIN COMPONENTS.
export const saveButton = SaveButton.FromExistingElem(
  document.querySelector(".save-btn")
);
export const listsWrapper = document.querySelector(".lists-wrapper");
export const addListButton = NewTabListButton.Create(listsWrapper);

//LOAD PREVIOUSLY SAVED OBJECTS.
LocalStorage.load();
