import { background } from "../../../../main.js";

export function addEventListeners(minimizeButton) {
  minimizeButton.addEventListener("click", () => {
    minimizeButton.toggleMinimization();
    background.updatePosition();
  });

  minimizeButton.addEventListener("mouseover", () =>
    minimizeButton.toggleText()
  );

  minimizeButton.addEventListener("mouseout", () =>
    minimizeButton.toggleText()
  );
}
