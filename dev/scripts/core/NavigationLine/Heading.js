import { createElement } from "../Utils/createElement.js";

export class Heading {
  static Create(tabList) {
    const heading = createElement("div", "nav-line__heading");
    heading._owner = tabList;
    heading._tabListTitle = tabList.getTitle();
    heading._lengthLimit = 27;

    addEventListeners(heading);
    addFunctionalities(heading);

    heading.updateHeading();
    return heading;
  }
}

function addFunctionalities(heading) {
  heading.updateHeading = function () {
    this.textContent = this._tabListTitle.textContent.trim();
    if (this.textContent.length > this._lengthLimit)
      this.textContent = this.textContent.slice(0, this._lengthLimit) + "...";
  };
}

function addEventListeners(heading) {
  heading.addEventListener("click", () => {
    heading._owner.scrollIntoView();
    heading._owner.runFocusAnimation();
    window.scrollBy(0, -100);
  });

  heading._tabListTitle.addEventListener("keyup", () => heading.updateHeading());
}
