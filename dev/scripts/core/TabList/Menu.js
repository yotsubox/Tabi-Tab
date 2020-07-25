import { createElement } from "../Utils.js";
import { addOptions } from "./Menu/Init.js";
export class Menu {
  static NewMenu(x, y, list, options) {
    const menu = createElement("div", "menu");
    document.body.appendChild(menu);

    menu.tabIndex = 9; //random number, so that div can be focus-able.
    menu.focus();

    menu.owner = list;
    menu.x = x;
    menu.y = y;
    //set position
    menu.style.left = x + "px";
    menu.style.top = y + "px";

    addOptions(menu, options);

    //outline the target list to inform the user.
    menu.owner.style.outline = "4px solid rgba(100, 158, 180, 0.8)";

    //destructor
    menu.addEventListener("blur", (e) => {
      document.body.removeChild(menu);
      menu.owner.style.outline = "";
    });
  }
}
