import { createElement } from "../../Utils.js";

export class Margin {
  static Create(tabList) {
    const margin = createElement("div", "list-margin");
    margin._owner = tabList;

    return margin;
  }
}
