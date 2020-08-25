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

  static delete(savable) {
    _deleteByType[savable.getType()](savable);
  }

  static getTabLists() {
    return _objects.tabLists;
  }

  static *[Symbol.iterator]() {
    for (const savable of _objects) yield savable;
  }

  static clear() {
    _objects.tabLists.clear();
  }
}

//
const _addByType = [];
const _deleteByType = [];

_addByType[Type.TAB_LIST] = function (tabList) {
  _objects.tabLists.add(tabList);
};

_deleteByType[Type.TAB_LIST] = function (tabList) {
  _objects.tabLists.delete(tabList);
};
