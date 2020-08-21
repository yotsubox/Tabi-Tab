import { Menu } from "../Menu.js";

export function addEventListeners(tabList) {
  tabList.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    showMenu(e, tabList);
  });

  tabList.addEventListener("animationend", (e) => {
    if (e.animationName === "list-focus-animation") tabList.classList.remove("list--focus-animation");
    else if (e.animationName === "list-start-animation") tabList.classList.remove("list--start-animation");
  });
}

export function showMenu(e, tabList) {
  const menu = Menu.Create(tabList, tabList._settings);

  const oldScrollX = window.scrollX;
  const oldScrollY = window.scrollY;

  menu.setPosition(e.clientX + oldScrollX, e.clientY + oldScrollY);
  menu.show();
  menu.focus();

  //keep scroll at old position after creating menu.
  window.scrollTo(oldScrollX, oldScrollY);
}
