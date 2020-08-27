export function addFunctionalities(removeButton) {
  removeButton.removeItem = function () {
    const tabList = this._owner.getOwner();
    tabList.removeItem(this._owner);
  };

  removeButton.getOwner = function () {
    return this._owner;
  };
}
