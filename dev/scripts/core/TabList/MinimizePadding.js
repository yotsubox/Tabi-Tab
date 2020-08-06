import { createElement } from "../Utils.js";

export class MinimizePadding {
  static Create() {
    const minimizePadding = createElement(
      "div",
      "list__minimize-padding --collapse"
    );
    minimizePadding.textContent = "...";

    return minimizePadding;
  }
}
