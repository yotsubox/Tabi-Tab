export function addFunctionalities(minimizeButton) {
  minimizeButton.getOwner = function () {
    return this._owner;
  };

  minimizeButton.toggleText = function () {
    if (this.textContent) this.textContent = "";
    else minimizeButton.updateText();
  };

  minimizeButton.updateText = function () {
    const minimized = this.getOwner().isMinimized();
  };

  minimizeButton.toggleMinimization = function () {
    this.getOwner().toggleMinimization();
    this.updateText();
  };
}
