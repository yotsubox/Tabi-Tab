import { Menu } from "../Menu.js";

export function showMenu(e) {
  e.preventDefault();
  const oldScrollX = window.scrollX;
  const oldScrollY = window.scrollY;

  Menu.NewMenu(e.clientX + oldScrollX, e.clientY + oldScrollY, this);

  //keep scroll at old position after creating menu.
  window.scrollTo(oldScrollX, oldScrollY);
}
