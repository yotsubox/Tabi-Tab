import { Type } from "../Type.js";

const _objects = {
  tabLists: new Set(),
};
/**
 * A stack that store objects needed to be saved (such as tab lists).
 */
export class SavableObjects {
  static add(saveable) {
    _addByType[saveable.getType()](saveable);
  }

  static remove(savable) {
    _removeByType[savable.getType()](savable);
  }

  static getTabLists() {
    return _objects.tabLists;
  }

  static clear() {
    _objects.tabLists.clear();
  }
}

//
const _addByType = [];
const _removeByType = [];

_addByType[Type.TAB_LIST] = function (tabList) {
  _objects.tabLists.add(tabList);
};

_removeByType[Type.TAB_LIST] = function (tabList) {
  _objects.tabLists.delete(tabList);
};
