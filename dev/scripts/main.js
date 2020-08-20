import { NewTabListButton } from "./core/NewTabListButton.js";
import { LocalStorage } from "./core/SaveSystem.js";
import { saveWhenCtrlS, saveEveryTenSec } from "./core/Events.js";
import { SaveButton } from "./core/SaveButton.js";
import { InfoButton } from "./core/InfoButton.js";
import { Background } from "./core/BackGround.js";
import { NavigationLine } from "./core/NavigationLine.js";
import { createElement } from "./core/Utils.js";

//BASIC FUNCTIONALITIES.
saveWhenCtrlS();
saveEveryTenSec();

//MAIN COMPONENTS.
export const hiddenElement = createElement("div", "hidden-element");
document.body.appendChild(hiddenElement);
export const background = Background.FromExistingElem(document.querySelector(".--background"));
export const saveButton = SaveButton.FromExistingElem(document.querySelector(".save-btn"));
InfoButton.FromExistingElem(document.querySelector(".info-btn"));
export const tabListSection = document.querySelector(".tab-list-section");
export const listContainer = document.querySelector(".list-container");
export const addListButton = NewTabListButton.Create(tabListSection);
export const navigationLine = NavigationLine.FromExistingElem(document.querySelector(".nav-line"));

//LOAD PREVIOUSLY SAVED OBJECTS.
LocalStorage.load();
