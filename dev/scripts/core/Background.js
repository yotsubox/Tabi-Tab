export class Background {
  static FromExistingElem(background) {
    const bgStyle = getComputedStyle(background);
    background._height = parseFloat(bgStyle.height);
    background._movableHeight = background._height - window.innerHeight;

    addFunctionalities(background);
    if (background._movableHeight > 0) moveBackgroundWhenScroll(background);

    return background;
  }
}

function addFunctionalities(background) {
  background.updatePosition = function () {
    const scrollHeight = document.body.scrollHeight;
    if (scrollHeight < background.height) background._moveByPosition();
    else background._moveByRatio();
  };

  background._moveByPosition = function () {
    this.style.top = -scrollY + "px";
  };

  background._moveByRatio = function () {
    const scrollHeight = document.body.scrollHeight;
    const scrollY = window.scrollY;
    const movableHeight = background._movableHeight;

    const EndOfScrollRatio =
      scrollHeight - window.innerHeight / window.devicePixelRatio;

    background.style.top = (-scrollY / EndOfScrollRatio) * movableHeight + "px";
  };
}

function moveBackgroundWhenScroll(background) {
  document.addEventListener("scroll", background.updatePosition);
}
