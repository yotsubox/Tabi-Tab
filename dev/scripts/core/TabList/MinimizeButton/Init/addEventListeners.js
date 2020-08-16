
export function addEventListeners(minimizeButton) {
  minimizeButton.addEventListener("click", () => {
    minimizeButton.toggleMinimization();
  });

  minimizeButton.addEventListener("mouseover", () =>
    minimizeButton.toggleText()
  );

  minimizeButton.addEventListener("mouseout", () =>
    minimizeButton.toggleText()
  );
}
