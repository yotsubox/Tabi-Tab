import { Type } from "../Type.js";
import { TabList } from "../TabList.js";
import { listContainer, navigationLine, background } from "../../main.js";

export class ObjectLoader {
  //for fuck sakes, js do not allow static const. god i hate this.
  static get _parseByType() {
    return parseByTypeHandlers;
  }

  static parse(savableObjectJSON) {
    this._parseByType[savableObjectJSON.type](savableObjectJSON);
  }
}

//init
const parseByTypeHandlers = [];
parseByTypeHandlers[Type.TAB_LIST] = _parseTabList;

function _parseTabList(tabListJSON) {
  const tabList = TabList.FromJSON(tabListJSON);
  navigationLine.add(tabList);
  listContainer.appendChild(tabList);
  background.updatePosition();
}
