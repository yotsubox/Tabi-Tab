import { NewTabListButton } from "./core/NewTabListButton.js";
import { LocalStorage } from "./core/SaveSystem.js";
import { saveWhenCtrlS, saveEveryTenSec } from "./core/Events.js";
import { SaveButton } from "./core/SaveButton.js";
import { InfoButton } from "./core/InfoButton.js";
import { Background } from "./core/BackGround.js";
import { NavigationLine } from "./core/NavigationLine.js";
import { NotificationManager } from "./core/NotificationManager.js";
import { submit } from "./core/ImagePaths.js";

//BASIC FUNCTIONALITIES.
saveWhenCtrlS();
saveEveryTenSec();

//MAIN COMPONENTS.
export const background = Background.FromExistingElem(document.querySelector(".--background"));
export const saveButton = SaveButton.FromExistingElem(document.querySelector(".save-btn"));
export const infoButton = InfoButton.FromExistingElem(document.querySelector(".info-btn"));
export const tabListSection = document.querySelector(".tab-list-section");
export const listContainer = document.querySelector(".list-container");
export const addListButton = NewTabListButton.Create(tabListSection);
export const navigationLine = NavigationLine.FromExistingElem(document.querySelector(".nav-line"));
export const notificationManager = new NotificationManager(document.querySelector(".notification-container"));

//LOAD PREVIOUSLY SAVED OBJECTS.
LocalStorage.load();
notificationManager.newNotification(
  "FUCKO osjodajo jsojfoasj ojojjasf asf safsa asf asfsaf asf asf asfasf",
  null,
  10000
);
