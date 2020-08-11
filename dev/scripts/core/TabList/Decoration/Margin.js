import { createElement } from "../../Utils.js";

export class Margin {
  static Create(tabList) {
    const margin = createElement("div", "list-margin");
    margin._owner = tabList;

    addFunctionalities(margin);

    margin.updateHeight();
    return margin;
  }
}

function addFunctionalities(margin) {
  margin.updateHeight = function () {
    const tabListComputedStyle = getComputedStyle(this._owner);
    this.style.height = tabListComputedStyle.height;
  };
}
