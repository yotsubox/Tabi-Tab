import { Heading } from "./NavigationLine/Heading.js";
import { createElement } from "./Utils/createElement.js";
import { insertElementBefore } from "./Utils/insertElementBefore.js";

export class NavigationLine {
  static FromExistingElem(navLine) {
    addFunctionalities(navLine);
    navLine._minimizeButton = MinimizeButton.Create(navLine);
    navLine._headingContainer = document.querySelector(".nav-line__heading-container");

    insertElementBefore(navLine._headingContainer, navLine._minimizeButton);

    return navLine;
  }
}

function addFunctionalities(navLine) {
  navLine.add = function (tabList) {
    const heading = Heading.Create(tabList);
    const decoration = Decoration.Create();
    navLine._headingContainer.append(heading, decoration);

    return heading;
  };

  navLine.toggleMinimization = function () {
    if (navLine._minimizeButton.style.width) navLine._minimizeButton.style.removeProperty("width");
    else {
      const style = getComputedStyle(navLine._minimizeButton);
      navLine._minimizeButton.style.width = style.width;
    }

    navLine._headingContainer.classList.toggle("--collapse");
  };
}

class Decoration {
  static Create() {
    const decoration = createElement("div", "nav-line__decoration");
    decoration.textContent = ".";
    return decoration;
  }
}

class MinimizeButton {
  static Create(navigationLine) {
    const minimizeButton = createElement("div", "nav-line__minimize-btn");
    minimizeButton.textContent = ".";
    minimizeButton._owner = navigationLine;

    minimizeButton.addEventListener("click", () => minimizeButton._owner.toggleMinimization());

    return minimizeButton;
  }
}
