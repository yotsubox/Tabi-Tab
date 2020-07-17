import { Type } from "../Utils.js";
import { newTabListFromJSON } from "../TabList/newTabListFromJSON.js";
import { addListButton } from "../../main.js";

export class ObjectLoader {
  //for fuck sakes, js do not allow static const. god i hate this.
  static get _parseByType() {
    return parseByTypeHandlers;
  }

  static parse(savableObjectJSON) {
    this._parseByType[savableObjectJSON.type](savableObjectJSON);
  }
}

const parseByTypeHandlers = [];
parseByTypeHandlers[Type.TabList] = _parseTabList;

function _parseTabList(tabListJSON) {
  const tabList = newTabListFromJSON(tabListJSON);

  addListButton.addList(tabList);
}
