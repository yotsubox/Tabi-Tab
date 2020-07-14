import { createElement } from "../Utils.js";

export class Menu {
  constructor(x, y, list) {
    this._listElem = list;
    this._x = x;
    this._y = y;

    this._createMenuElem();
    this._addOptions();

    //outline the target list to inform the user.
    this._listElem.style.outline = "4px solid rgba(100, 158, 180, 0.8)";

    //destructor
    this.elem.addEventListener("blur", (e) => {
      document.body.removeChild(this.elem);
      this._listElem.style.outline = "";
    });
  }

  _createMenuElem() {
    this.elem = createElement("div", "list-menu");
    document.body.appendChild(this.elem);

    this.elem.tabIndex = 9; //random number, so that div can be focus-able.
    this.elem.focus();

    this.elem.style.left = this._x + "px";
    this.elem.style.top = this._y + "px";
  }

  _addOptions() {
    //priority
    const oPriority = this._newCheckBoxOption("Priority", false);
  }

  _newCheckBoxOption(name, checked) {
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
    this.elem.append(option);
  }
}
