import { Heading } from "./NavigationLine/Heading.js";
import { createElement } from "./Utils/createElement.js";

export class NavigationLine {
  static FromExistingElem(navLine) {
    addFunctionalities(navLine);
    navLine.append(Decoration.Create());

    return navLine;
  }
}

function addFunctionalities(navLine) {
  navLine.add = function (tabList) {
    const heading = Heading.Create(tabList);
    const decoration = Decoration.Create();
    navLine.append(heading, decoration);

    return heading;
  };
}

class Decoration {
  static Create() {
    const decoration = createElement("div", "nav-line__decoration");
    decoration.textContent = ".";
    return decoration;
  }
}
