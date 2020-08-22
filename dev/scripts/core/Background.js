import { getPageHeight } from "./Utils.js";

export class Background {
  static FromExistingElem(background) {
    const bgStyle = getComputedStyle(background);
    background._height = parseFloat(bgStyle.height);
    background._movableHeight = background._height - window.innerHeight / window.devicePixelRatio;

    addFunctionalities(background);
    if (background._movableHeight > 0) moveBackgroundWhenScroll(background);

    return background;
  }
}

function addFunctionalities(background) {
  background.updatePosition = function () {
    //update height because of scroll bar.
    const bgStyle = getComputedStyle(background);
    background._height = parseFloat(bgStyle.height);
    background._movableHeight = background._height - window.innerHeight;

    const maxScrollY = getPageHeight() - window.innerHeight;
    if (maxScrollY < background._movableHeight) background._moveByPosition();
    else background._moveByRatio();
  };

  background._moveByPosition = function () {
    this.style.top = -window.scrollY + "px";
  };

  background._moveByRatio = function () {
    const movableHeight = background._movableHeight;
    const maxScrollY = getPageHeight() - window.innerHeight;

    const endOfScrollRatio = window.scrollY / maxScrollY;
    background.style.top = -endOfScrollRatio * movableHeight + "px";
  };
}

function moveBackgroundWhenScroll(background) {
  document.addEventListener("scroll", background.updatePosition);
}
