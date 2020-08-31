export function addFunctionalities(minimizeButton) {
  minimizeButton.getOwner = function () {
    return this._owner;
  };

  minimizeButton.toggleMinimization = function () {
    this.getOwner().toggleMinimization();
  };
}
