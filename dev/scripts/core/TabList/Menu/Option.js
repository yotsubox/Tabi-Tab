import { createElement } from "../../Utils.js";

export class Option {
  static NewCheckBoxOption(menu, name, checked) {
    const option = createElement("div", "list-menu__option");

    const cBox = createElement("input", "list-menu__option-box");
    cBox.type = "checkbox";
    cBox.checked = checked;

    //apparently mousedown happened before focus.
    //this is to make check box not on focus, so that the menu won't close.
    cBox.addEventListener("mousedown", (e) => {
      e.preventDefault();
    });

    const optionName = createElement("div", "list-menu__option-name");
    optionName.textContent = name;

    option.append(cBox, optionName);
    menu.append(option);
  }
}
