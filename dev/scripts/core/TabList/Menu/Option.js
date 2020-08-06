import { CheckBoxOption, ButtonOption } from "./Init.js";

export class Option {
  static CreateCheckBox(owner, name, checked = false) {
    return CheckBoxOption.Create(owner, name, checked);
  }

  static CreateButton(owner, name) {
    return ButtonOption.Create(owner, name);
  }
}
