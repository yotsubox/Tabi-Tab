import { Option } from "../Option.js";

export function addOptions(menu, settings) {
  addUnorderedListCheckBox(menu, settings);
  addClearListButton(menu);
  addDeleteListButton(menu);
}

function addUnorderedListCheckBox(menu, settings) {
  const unorderedListCheckBox = Option.CreateCheckBox(
    menu,
    "Unordered",
    settings.unorderedList
  );

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
  });

  menu.appendChild(clearListButton);
  return clearListButton;
}

function addDeleteListButton(menu) {
  const deleteListButton = Option.CreateButton(menu, "Delete List");

  deleteListButton.addListener(() => {
    menu.getOwner().remove();
    menu.remove();
  });

  menu.appendChild(deleteListButton);
  return deleteListButton;
}
