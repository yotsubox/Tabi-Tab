import { newAddListButton } from "./core/AddListButton/newAddListButton.js";
import { LocalStorage } from "./core/SaveSystem/LocalStorage.js";
import { saveWhenCtrlS, saveEveryTenSec } from "./core/Events.js";

//BASIC FUNCTIONALITIES.
saveWhenCtrlS();
saveEveryTenSec();

//MAIN COMPONENTS.
export const listsWrapper = document.querySelector(".lists-wrapper");
export const addListButton = newAddListButton(listsWrapper);

//LOAD PREVIOUSLY SAVE OBJECTS.
LocalStorage.load();

//DEBUG
