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
    const bgStyle = getComputedStyle(background);
    background._height = parseFloat(bgStyle.height);
    background._movableHeight = background._height - window.innerHeight;

    const scrollHeight = document.body.scrollHeight;
    const maxScrollY =
      scrollHeight - window.innerHeight / window.devicePixelRatio;

    if (maxScrollY < background._movableHeight) background._moveByPosition();
    else background._moveByRatio();
  };

  background._moveByPosition = function () {
    this.style.top = -window.scrollY + "px";
  };

  background._moveByRatio = function () {
    const scrollHeight = document.body.scrollHeight;
    const scrollY = window.scrollY;
    const movableHeight = background._movableHeight;

    const maxScrollY =
      scrollHeight - window.innerHeight / window.devicePixelRatio;
    const EndOfScrollRatio = -scrollY / maxScrollY;

    console.log(EndOfScrollRatio);

    background.style.top = EndOfScrollRatio * movableHeight + "px";
  };
}

function moveBackgroundWhenScroll(background) {
  document.addEventListener("scroll", background.updatePosition);
}
