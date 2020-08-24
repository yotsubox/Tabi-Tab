import { NewTabListButton } from "./core/NewTabListButton.js";
import { LocalStorage, saveData } from "./core/SaveSystem.js";
import { saveWhenCtrlS, saveEveryTenSec, showPage } from "./core/Events.js";
import { SaveButton } from "./core/SaveButton.js";
import { InfoButton } from "./core/InfoButton.js";
import { Background } from "./core/BackGround.js";
import { NavigationLine } from "./core/NavigationLine.js";
import { NotificationManager } from "./core/NotificationManager.js";
import { Greetings } from "./core/Greetings.js";

//BASIC FUNCTIONALITIES.
showPage();
saveWhenCtrlS();
saveEveryTenSec();

//INTERNALS OBJECTS
export const notificationManager = new NotificationManager(document.querySelector(".notification-container"));

//MAIN COMPONENTS.
export const background = Background.FromExistingElem(document.querySelector(".--background"));
export const saveButton = SaveButton.FromExistingElem(document.querySelector(".save-btn"));
export const infoButton = InfoButton.FromExistingElem(document.querySelector(".info-btn"));
export const tabListSection = document.querySelector(".tab-list-section");
export const listContainer = document.querySelector(".list-container");
export const addListButton = NewTabListButton.Create(tabListSection);
export const navigationLine = NavigationLine.FromExistingElem(document.querySelector(".nav-line"));

//OTHERS
LocalStorage.updateTimestamp();
export const timestampPassedSinceLastOpened = saveData.timestamp.timestampPassedSinceLastOpened;

//INIT.
LocalStorage.load();

//Greet User :)
notificationManager.newNotification(Greetings.pick(), null, 10000);
