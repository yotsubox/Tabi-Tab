export function addEventListeners(tabList) {
  tabList.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    showMenu(e, tabList._menu);
  });
}

export function showMenu(e, menu) {
  const oldScrollX = window.scrollX;
  const oldScrollY = window.scrollY;

  menu.setPosition(e.clientX + oldScrollX, e.clientY + oldScrollY);
  menu.show();
  menu.focus();

  //keep scroll at old position after creating menu.
  window.scrollTo(oldScrollX, oldScrollY);
}
