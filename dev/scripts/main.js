import { NewTabListButton } from "./core/NewTabListButton.js";
import { LocalStorage, ChangesDetector } from "./core/SaveSystem.js";
import { saveWhenCtrlS, saveEveryTenSec, showPage } from "./core/Events.js";
import { SaveButton } from "./core/SaveButton.js";
import { InfoButton } from "./core/InfoButton.js";
import { Background } from "./core/BackGround.js";
import { NavigationLine } from "./core/NavigationLine.js";
import { NotificationManager } from "./core/NotificationManager.js";
import { Greetings } from "./core/Greetings.js";
import { GetSaveFileButton } from "./core/GetSaveFileButton.js";
import { LoadButton } from "./core/Utils/LoadButton.js";

//BASIC FUNCTIONALITIES.
showPage();
saveWhenCtrlS();
saveEveryTenSec();

//INTERNALS OBJECTS
export const notificationManager = new NotificationManager(document.querySelector(".notification-container"));

//MAIN COMPONENTS.
export const tabListSection = document.querySelector(".tab-list-section");
export const listContainer = document.querySelector(".list-container");
export const background = Background.FromExistingElem(document.querySelector(".--background"));
export const getSaveFileButton = GetSaveFileButton.FromExistingElem(document.querySelector(".get-save-file-btn"));
export const loadButton = LoadButton.FromExistingElem(document.querySelector(".load-btn"));
export const saveButton = SaveButton.FromExistingElem(document.querySelector(".save-btn"));
export const infoButton = InfoButton.FromExistingElem(document.querySelector(".info-btn"));
export const addListButton = NewTabListButton.Create(tabListSection);
export const navigationLine = NavigationLine.FromExistingElem(document.querySelector(".nav-line"));

//OTHERS
LocalStorage.updateTimestamp();
export const timestampPassedSinceLastOpened = LocalStorage.getSaveData().timestamp.timestampPassedSinceLastOpened;

//Load stuff.
LocalStorage.load();

//Greet User :) (every one hour since last opened)
LocalStorage.initGreetingIndicesArray();
if (timestampPassedSinceLastOpened >= 3.6e6 || timestampPassedSinceLastOpened === 0) {
  notificationManager.newNotification(Greetings.pick(), null, 15000);
  //save greetings indices' changes.
  ChangesDetector.detected();
  LocalStorage.save();
}
