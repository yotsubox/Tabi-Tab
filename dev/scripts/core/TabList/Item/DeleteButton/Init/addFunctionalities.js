export function addFunctionalities(deleteButton) {
  deleteButton.deleteItem = function () {
    const tabList = this._owner.getOwner();
    tabList.removeItem(this._owner);
  };

  deleteButton.getOwner = function () {
    return this._owner;
  };
}
