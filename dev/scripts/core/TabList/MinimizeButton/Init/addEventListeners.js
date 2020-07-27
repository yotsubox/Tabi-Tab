export function addEventListeners(minimizeButton) {
  minimizeButton.addEventListener("click", toggleMinimization);

  minimizeButton.addEventListener("mouseover", () =>
    minimizeButton.toggleText()
  );

  minimizeButton.addEventListener("mouseout", () =>
    minimizeButton.toggleText()
  );
}

function toggleMinimization() {
  this.getOwner().toggleMinimization();
  this.updateText();
}
