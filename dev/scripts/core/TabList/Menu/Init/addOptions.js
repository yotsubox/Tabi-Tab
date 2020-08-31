import { Option } from "../Option.js";
import { notificationManager } from "../../../../main.js";
import { clear, removeList } from "../../../ImagePaths.js";

export function addOptions(menu, settings) {
  addUnorderedListCheckBox(menu, settings);
  addClearListButton(menu);
  addRemoveListButton(menu);
}

function addUnorderedListCheckBox(menu, settings) {
  const unorderedListCheckBox = Option.CreateCheckBox(menu, "Unordered", settings.unorderedList);

  unorderedListCheckBox.addListener(() => {
    menu.getOwner().toggleUnorderedListStyle();
  });

  menu.appendChild(unorderedListCheckBox);
  return unorderedListCheckBox;
}

function addClearListButton(menu) {
  const clearListButton = Option.CreateButton(menu, "Clear Items");

  clearListButton.addListener(() => {
    menu.getOwner().clearItems();
    menu.blur();
    notificationManager.newNotification("Items Cleared!", clear);
  });

  menu.appendChild(clearListButton);
  return clearListButton;
}

function addRemoveListButton(menu) {
  const removeListButton = Option.CreateButton(menu, "Remove List");

  removeListButton.addListener(() => {
    menu.getOwner().remove();
    menu.blur();
    notificationManager.newNotification("List Removed", removeList);
  });

  menu.appendChild(removeListButton);
  return removeListButton;
}
