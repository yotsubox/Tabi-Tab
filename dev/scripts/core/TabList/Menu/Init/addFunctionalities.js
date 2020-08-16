export function addFunctionalities(menu) {
  menu.getOwner = function () {
    return this._owner;
  };

  menu.setPosition = function (x, y) {
    this._x = x;
    this._y = y;

    this.style.left = x + "px";
    this.style.top = y + "px";
  };

  menu.show = function () {
    this.classList.remove("--collapse");
    this._owner.classList.add("list--outline");
  };
}
