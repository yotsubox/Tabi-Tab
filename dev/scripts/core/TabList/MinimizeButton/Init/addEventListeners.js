export function addEventListeners(minimizeButton) {
  minimizeButton.addEventListener("click", () => {
    minimizeButton.toggleMinimization();
  });
}
