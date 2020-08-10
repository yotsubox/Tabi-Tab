import { createElement } from "../Utils.js";
import { addOptions, addFunctionalities } from "./Menu/Init.js";

export class Menu {
  static Create(tabList, settings) {
    const menu = Menu._CreateMenuElement();
    document.body.appendChild(menu);

    initProperties(menu, tabList);
    addFunctionalities(menu);
    addEventListener(menu);
    addOptions(menu, settings);

    return menu;
  }

  static _CreateMenuElement() {
    return createElement("div", "menu --collapse");
  }
}

function initProperties(menu, tabList) {
  menu.tabIndex = 9; //random number, so that div can be focus-able.

  menu._owner = tabList;
  menu._x = -1;
  menu._y = -1;
}

function addEventListener(menu) {
  menu.addEventListener("blur", menu.hide);
  menu.addEventListener("contextmenu", (e) => e.preventDefault());
}
