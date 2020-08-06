import { Option } from "../Option.js";

export function addOptions(menu, settings) {
  addUnorderedListCheckBox(menu, settings);
  addClearListButton(menu);
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

  return unorderedListCheckBox;
}

function addClearListButton(menu) {
  const clearListButton = Option.CreateButton(menu, "Clear list");
}
