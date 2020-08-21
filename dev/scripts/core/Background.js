import { getPageHeight } from "./Utils.js";

export class Background {
  static FromExistingElem(background) {
    const bgStyle = getComputedStyle(background);
    background._height = parseFloat(bgStyle.height);
    background._movableHeight =
      background._height - window.innerHeight / window.devicePixelRatio;

    addFunctionalities(background);
    if (background._movableHeight > 0) moveBackgroundWhenScroll(background);

    return background;
  }
}

function addFunctionalities(background) {
  background.updatePosition = function () {
<<<<<<< HEAD
    //update height because of scroll bar.
=======
>>>>>>> f127c3a6263e96f903db6a0300e392a0bac108e7
    const bgStyle = getComputedStyle(background);
    background._height = parseFloat(bgStyle.height);
    background._movableHeight = background._height - window.innerHeight;

<<<<<<< HEAD
    const maxScrollY = getPageHeight() - window.innerHeight;
    console.log(maxScrollY, scrollY);
=======
    const scrollHeight = document.body.scrollHeight;
    const maxScrollY =
      scrollHeight - window.innerHeight / window.devicePixelRatio;

>>>>>>> f127c3a6263e96f903db6a0300e392a0bac108e7
    if (maxScrollY < background._movableHeight) background._moveByPosition();
    else background._moveByRatio();
  };

  background._moveByPosition = function () {
    this.style.top = -window.scrollY + "px";
  };

  background._moveByRatio = function () {
    const scrollY = window.scrollY;
    const movableHeight = background._movableHeight;

<<<<<<< HEAD
    const EndOfScrollRatio = getPageHeight() - window.innerHeight;
=======
    const maxScrollY =
      scrollHeight - window.innerHeight / window.devicePixelRatio;
    const EndOfScrollRatio = -scrollY / maxScrollY;

    console.log(EndOfScrollRatio);
>>>>>>> f127c3a6263e96f903db6a0300e392a0bac108e7

    background.style.top = EndOfScrollRatio * movableHeight + "px";
  };
}

function moveBackgroundWhenScroll(background) {
  document.addEventListener("scroll", background.updatePosition);
}
