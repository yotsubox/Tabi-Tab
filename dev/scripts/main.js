import { newAddListButton } from "./core/AddListButton/newAddListButton.js";
import { LocalStorage } from "./core/LocalStorage/LocalStorage.js";

const listsWrapper = document.querySelector(".lists-wrapper");
//add existing lists

//"add list" button.
const btn = newAddListButton(listsWrapper);

//DEBUG
btn.dispatchEvent(new MouseEvent("click"));
LocalStorage.save();
LocalStorage.load();
