/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "saveButton", function() { return /* binding */ main_saveButton; });
__webpack_require__.d(__webpack_exports__, "tabListSection", function() { return /* binding */ tabListSection; });
__webpack_require__.d(__webpack_exports__, "listContainer", function() { return /* binding */ listContainer; });
__webpack_require__.d(__webpack_exports__, "addListButton", function() { return /* binding */ main_addListButton; });

// CONCATENATED MODULE: ./dev/scripts/core/Utils/createElement.js
/**
 *
 * @param {String} tagName
 * @param {String} className
 * @return {HTMLElement}
 */
function createElement(tagName, className) {
  const elem = document.createElement(tagName);
  elem.className = className;
  return elem;
}

// CONCATENATED MODULE: ./dev/scripts/core/Utils/makeElementEditable.js
function makeElementEditable(target) {
  target.contentEditable = true;
  target.spellcheck = false;

  //remove formatting on paste
  target.addEventListener("paste", (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text/plain");
    document.execCommand("insertHTML", false, text);
  });
}

// CONCATENATED MODULE: ./dev/scripts/core/Utils/Type.js
const Type = Object.freeze({
  TabList: 0,
});

// CONCATENATED MODULE: ./dev/scripts/core/Utils/insertElementAfter.js
/**
 * insert an element after a given target element
 * @param {HTMLElement} target element to insert after.
 * @param {HTMLElement} item item to insert.
 */
function insertElementAfter(target, item) {
  const parent = target.parentElement;

  if (parent) {
    if (target.nextElementSibling)
      parent.insertBefore(item, target.nextElementSibling);
    else parent.appendChild(item);

    return;
  }

  throw ReferenceError(
    "target item does not have a parent, therefore can not be insert after."
  );
}

// CONCATENATED MODULE: ./dev/scripts/core/Utils/insertElementBefore.js
/**
 * insert an element before a given target element
 * @param {HTMLElement} target element to insert before.
 * @param {HTMLElement} item item to insert.
 */
function insertElementBefore(target, item) {
  const parent = target.parentElement;

  if (parent) {
    parent.insertBefore(item, target);
    return;
  }

  throw ReferenceError(
    `target item (${target.constructor.name}) does not have a parent, therefore can not be insert before.`
  );
}

// CONCATENATED MODULE: ./dev/scripts/core/Utils.js






// CONCATENATED MODULE: ./dev/scripts/core/SaveSystem/SavableObjects.js
let _stack = [];
/**
 * A stack that store objects needed to be saved (such as tab lists).
 */
class SavableObjects {
  static add(saveable) {
    _stack.push(saveable);
  }

  static *[Symbol.iterator]() {
    for (const savable of _stack) yield savable;
  }

  static clear() {
    _stack = [];
  }
}

// CONCATENATED MODULE: ./dev/scripts/core/SaveSystem/ObjectLoader.js




class ObjectLoader {
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
parseByTypeHandlers[Type.TabList] = _parseTabList;

function _parseTabList(tabListJSON) {
  TabList_TabList.FromJSON(listContainer, tabListJSON);
}

// CONCATENATED MODULE: ./dev/scripts/core/SaveSystem/ChangesDetector.js
let _changed = false;
const _listenersData = {
  onChange: [],
  onSave: [],
};

/**
 * Class that detects changes and dispatches events related to changes.
 */
class ChangesDetector {
  static haveChangesBeenMade() {
    // DEBUG
    console.log("haveChangesBeenMade", _changed);

    return _changed;
  }

  /**
   * Add listener, called when things have changed.
   * @param {"onChange" | "onSave"} type the event type.
   * @param {function} listener the function/method to call to
   * @param {object | null} thisArg the object to call method from (null if is a function)
   */
  static addEventListener(type, listener, thisArg, ...args) {
    _listenersData[type].push({
      listener,
      thisArg,
      args,
    });
  }

  static _dispatchEvent(type) {
    const listenersData = _listenersData[type];
    //callback
    for (const { listener, thisArg, args } of listenersData) {
      listener.apply(thisArg, args);
    }
  }

  /**
   * call to inform that changes have been made.
   * dispatch "onChange" event only if changes have not been made before.
   */
  static detected() {
    //only call once.
    if (_changed) return;

    _changed = true;

    ChangesDetector._dispatchEvent("onChange");
  }

  /**
   * call to inform that changes have been saved.
   * dispatch "onSave" event.
   */
  static resetState() {
    _changed = false;

    ChangesDetector._dispatchEvent("onSave");
  }
}

// CONCATENATED MODULE: ./dev/scripts/core/SaveSystem/LocalStorage.js




const storage = window.localStorage;

class LocalStorage_LocalStorage {
  /**
   * save changes.
   * @returns {boolean} returns true if changes are saved. false if there are no changes or failed to save.
   */
  static save() {
    //if nothing has changed, do nothing.
    if (!ChangesDetector.haveChangesBeenMade()) return false;

    let id = 0;
    for (const savable of SavableObjects) {
      //for some fucking reason, numbers (or number strings) as key do not work properly.
      storage.setItem(`+${id}`, savable.stringify());
      id++;
    }

    //things are now unchanged.
    ChangesDetector.resetState();

    //DEBUG
    console.log("SAVED:");
    console.log(`savables`, SavableObjects._stack);
    console.log(`storage:`, storage);

    return true;
  }

  static load() {
    const savableObjectsData = getSavableObjectsData();

    this._removeCurrentlyRunningObjects();
    SavableObjects.clear();

    for (const data of savableObjectsData) {
      ObjectLoader.parse(data);
    }
  }

  static _clear() {
    storage.clear();
  }

  static _removeCurrentlyRunningObjects() {
    for (const savable of SavableObjects) {
      savable.remove();
    }
  }
}

//
function getSavableObjectsData() {
  const savableObjectsData = [];
  for (let i = 0; i < storage.length; i++) {
    //get data
    const key = storage.key(i);
    savableObjectsData.push(JSON.parse(storage.getItem(key)));
  }
  return savableObjectsData;
}

// CONCATENATED MODULE: ./dev/scripts/core/SaveSystem.js





// CONCATENATED MODULE: ./dev/scripts/core/TabList/MinimizeButton/Init/addEventListeners.js
function addEventListeners(minimizeButton) {
  minimizeButton.addEventListener("click", toggleMinimization);

  minimizeButton.addEventListener("mouseover", () =>
    minimizeButton.toggleText()
  );

  minimizeButton.addEventListener("mouseout", () =>
    minimizeButton.toggleText()
  );
}

function toggleMinimization() {
  this.getOwner().toggleMinimization();
  this.updateText();
}

// CONCATENATED MODULE: ./dev/scripts/core/TabList/MinimizeButton/Init/addFunctionalities.js
function addFunctionalities(minimizeButton) {
  minimizeButton.getOwner = function () {
    return this._owner;
  };

  minimizeButton.toggleText = function () {
    if (this.textContent) this.textContent = "";
    else minimizeButton.updateText();
  };

  minimizeButton.updateText = function () {
    const minimized = this.getOwner().isMinimized();

    this.textContent = minimized ? "maximize" : "minimize";
  };
}

// CONCATENATED MODULE: ./dev/scripts/core/TabList/MinimizeButton/Init.js



// CONCATENATED MODULE: ./dev/scripts/core/TabList/MinimizeButton.js


class MinimizeButton_MinimizeButton {
  static Create(tabList) {
    const button = document.createElement("div", "");

    button.classList.add("list__minimize-button");
    button._owner = tabList;
    button._minimize = false;

    addFunctionalities(button);
    addEventListeners(button);

    return button;
  }
}

// CONCATENATED MODULE: ./dev/scripts/core/TabList/ItemContainer.js


class ItemContainer_ItemContainer {
  static Create(tabList) {
    const itemContainer = createElement("div", "list__item-wrapper");

    return itemContainer;
  }
}

// CONCATENATED MODULE: ./dev/scripts/core/TabList/Title/Init/addEventListeners.js


function addEventListeners_addEventListeners(title, tabList) {
  title.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") {
      //saving is now available
      ChangesDetector.detected();
      return;
    }

    if (tabList.getItemCount() === 0) tabList.getFutureItem().focus();
    else title.blur();
  });

  title.addEventListener("blur", () => {
    title.textContent = title.textContent.trim();
  });
}

// CONCATENATED MODULE: ./dev/scripts/core/TabList/Title/Init.js


// CONCATENATED MODULE: ./dev/scripts/core/TabList/Title.js



class Title_Title {
  static Create(tabList, titleName = "Title") {
    const title = document.createElement("div");
    title.className = "list__title";
    title.textContent = titleName;

    makeElementEditable(title);

    addEventListeners_addEventListeners(title, tabList);

    return title;
  }
}

// CONCATENATED MODULE: ./dev/scripts/core/TabList/FutureItem/Init/addEventListeners.js


function Init_addEventListeners_addEventListeners(list, futureItem) {
  futureItem.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    ChangesDetector.detected();

    //prevent line-break
    e.preventDefault();

    futureItem.textContent = futureItem.textContent.trim();

    //if content is empty
    if (!futureItem.textContent.length) {
      return;
    }

    newItem(e, futureItem, list);
  });

  futureItem.addEventListener("blur", () => {
    futureItem.textContent = futureItem.textContent.trim();
  });

  function newItem(e, futureItem, tabList) {
    const item = tabList.newItem();

    //transfer text to newly created item and append.
    const itemContent = item.getContentElem();
    itemContent.textContent = futureItem.textContent;
    futureItem.textContent = "";

    tabList.getItemContainer().insertBefore(item, futureItem);
  }
}

// CONCATENATED MODULE: ./dev/scripts/core/TabList/FutureItem/Init.js


// CONCATENATED MODULE: ./dev/scripts/core/TabList/FutureItem.js



class FutureItem_FutureItem {
  static Create(tabList) {
    const futureItem = createElement("div", "list__item list__item--add-more");
    makeElementEditable(futureItem);

    Init_addEventListeners_addEventListeners(tabList, futureItem);

    return futureItem;
  }
}

// CONCATENATED MODULE: ./dev/scripts/core/TabList/Item/Init/addFunctionalities.js
function addFunctionalities_addFunctionalities(item) {
  item.setOrderNumber = function (orderNumber) {
    if (orderNumber === 0) this._order.textContent = "";
    else this._order.textContent = orderNumber + ".";
    this._orderNumber = orderNumber;
  };

  /**
   * return it's parent (the list that contain itself)
   */
  item.getOwner = function () {
    return this._owner;
  };

  item.getOrderNumber = function () {
    return this._orderNumber;
  };

  item.getContentElem = function () {
    return this._content;
  };

  item.getURL = function () {
    return this._content.textContent;
  };
}

// CONCATENATED MODULE: ./dev/scripts/core/TabList/Item/Init/addEventListeners.js




// GLOBAL VARIABLES USED FOR ALL ITEMS
let draggedItem = null;
let draggedOverItem = null;

function Item_Init_addEventListeners_addEventListeners(item) {
  const contentBox = item.getContentElem();

  contentBox.addEventListener("keydown", (e) => blurWhenPressEnter(e, item));

  contentBox.addEventListener("blur", () => cleanUp(item));

  //dragging events
  item.addEventListener("dragstart", (e) => showDraggingEffect(e, item));

  item.addEventListener("dragover", (e) => moveItemAway(e, item));

  item.addEventListener("dragend", removeDraggingEffect);
}

//KEY DOWN EVENT
function blurWhenPressEnter(e, item) {
  if (e.key !== "Enter") {
    //saving is now available
    ChangesDetector.detected();
    return;
  }
  e.preventDefault();

  focusOnNextItem(item);

  item.getContentElem().blur(); //DO NOT MOVE THIS LINE.
}

function focusOnNextItem(item) {
  const tabList = item.getOwner();
  const futureItem = tabList.getFutureItem();

  if (tabList.getItemCount() === item.getOrderNumber()) futureItem.focus();
  else item.nextElementSibling.getContentElem().focus();
}

//BLUR
function cleanUp(item) {
  const tabList = item.getOwner();
  const itemContentBox = item.getContentElem();
  itemContentBox.textContent = itemContentBox.textContent.trim();

  //if item is empty, remove and focus on next item.
  if (!itemContentBox.textContent.length) {
    tabList.removeItem(item);
    fixOrderNumber(tabList);
  }
}

//DRAG EVENTS
function showDraggingEffect(e, item) {
  draggedItem = item;
  item.getContentElem().classList.add("list__item-contentBox--dragging");

  //blank image element as "ghost" image
  e.dataTransfer.setDragImage(document.createElement("img"), 0, 0);
}

function removeDraggingEffect() {
  {
    ChangesDetector.detected();

    draggedItem
      .getContentElem()
      .classList.remove("list__item-contentBox--dragging");
    //clean up
    draggedItem = null;
  }
}

function moveItemAway(e, item) {
  e.preventDefault();

  const box = item.getBoundingClientRect();
  const offsetY = e.clientY - (box.top + box.height / 2);
  const draggedItemIsOnTopOfItem = offsetY < 0;

  if (draggedItemIsOnTopOfItem) putDraggedItemOnTopOf(item);
  else putDraggedItemOnBottomOf(item);
}

function putDraggedItemOnTopOf(item) {
  if (draggedOverItem === item) return;
  draggedOverItem = item;

  insertElementBefore(item, draggedItem);
  fixOrderNumber(item.getOwner());
}

function putDraggedItemOnBottomOf(item) {
  if (draggedOverItem === draggedItem) return;
  draggedOverItem = draggedItem;

  insertElementAfter(item, draggedItem);
  fixOrderNumber(item.getOwner());
}

//OTHERS
function fixOrderNumber(tabList) {
  const itemContainer = tabList.getItemContainer();
  // - 1 to exclude title and future item
  const range = itemContainer.children.length - 1;
  for (let i = 0; i < range; i++) {
    const item = itemContainer.children[i];
    item.setOrderNumber(i + 1);
  }
}

// CONCATENATED MODULE: ./dev/scripts/core/TabList/Item/Init.js



// CONCATENATED MODULE: ./dev/scripts/core/TabList/Item.js




class Item_Item {
  static Create(tabList, orderNumber, url = "") {
    const item = createElement("div", "list__item");
    item.draggable = true;

    item._orderNumber = orderNumber;
    item._owner = tabList;
    // layout:
    // <order>. <contentBox>
    // e.g: 9. worms.com
    const order = createElement("div", "list__item-order");
    order.textContent = orderNumber + ".";
    item._order = order;

    const contentBox = createElement("div", "list__item-contentBox");
    makeElementEditable(contentBox);

    contentBox.textContent = url;
    item._content = contentBox;

    item.appendChild(order);
    item.appendChild(contentBox);

    addFunctionalities_addFunctionalities(item);
    Item_Init_addEventListeners_addEventListeners(item);

    return item;
  }
}

// CONCATENATED MODULE: ./dev/scripts/core/TabList/Init/addFunctionalities.js



function Init_addFunctionalities_addFunctionalities(tabList) {
  tabList.addEventListener("contextmenu", showMenu);

  tabList.getItemCount = function () {
    return this._itemCount;
  };

  tabList.removeItem = function (item) {
    item.remove();
    this._itemCount--;
  };

  tabList.getTitleName = function () {
    return this._title.textContent;
  };

  tabList.getTitle = function () {
    return this._title;
  };

  tabList.getItems = function () {
    return Array.from(this._itemContainer.children).slice(0, this._itemCount);
  };

  tabList.getFutureItem = function () {
    return this._futureItem;
  };

  tabList.getItemContainer = function () {
    return this._itemContainer;
  };

  tabList.getMinimizeButton = function () {
    return this._minimizeButton;
  };

  tabList.newItem = function (url = "") {
    this._itemCount++;
    const item = Item_Item.Create(this, this._itemCount, url);

    return item;
  };

  tabList.toggleMinimization = function () {
    const itemContainer = this.getItemContainer();
    tabList._minimized = itemContainer.classList.toggle("--collapse");
  };

  tabList.isMinimized = function () {
    return this._minimized;
  };

  tabList.stringify = function () {
    const urls = getURLsFrom(this.getItems());

    return JSON.stringify({
      type: Type.TabList,
      settings: this._settings,
      titleName: this.getTitleName(),
      urls: urls,
    });
  };
}

// CONCATENATED MODULE: ./dev/scripts/core/TabList/Init/newDefaultSettings.js
function newDefaultSettings() {
  return {};
}

// CONCATENATED MODULE: ./dev/scripts/core/TabList/Menu/Option.js


class Option_Option {
  static NewCheckBoxOption(menu, name, checked) {
    const option = createElement("div", "list-menu__option");

    const cBox = createElement("input", "list-menu__option-box");
    cBox.type = "checkbox";
    cBox.checked = checked;

    //apparently mousedown happened before focus.
    //this is to make check box not on focus, so that the menu won't close.
    cBox.addEventListener("mousedown", (e) => {
      e.preventDefault();
    });

    const optionName = createElement("div", "list-menu__option-name");
    optionName.textContent = name;

    option.append(cBox, optionName);
    menu.append(option);
  }
}

// CONCATENATED MODULE: ./dev/scripts/core/TabList/Menu/Init/addOptions.js


function addOptions(menu, options) {
  //priority
  const oPriority = Option_Option.NewCheckBoxOption(menu, "Priority", false);
}

// CONCATENATED MODULE: ./dev/scripts/core/TabList/Menu/Init.js


// CONCATENATED MODULE: ./dev/scripts/core/TabList/Menu.js


class Menu_Menu {
  static NewMenu(x, y, list, options) {
    const menu = createElement("div", "menu");
    document.body.appendChild(menu);

    menu.tabIndex = 9; //random number, so that div can be focus-able.
    menu.focus();

    menu.owner = list;
    menu.x = x;
    menu.y = y;
    //set position
    menu.style.left = x + "px";
    menu.style.top = y + "px";

    addOptions(menu, options);

    //outline the target list to inform the user.
    menu.owner.style.outline = "4px solid rgba(100, 158, 180, 0.8)";

    //destructor
    menu.addEventListener("blur", (e) => {
      document.body.removeChild(menu);
      menu.owner.style.outline = "";
    });
  }
}

// CONCATENATED MODULE: ./dev/scripts/core/TabList/Init/showMenu.js


function showMenu(e) {
  e.preventDefault();
  const oldScrollX = window.scrollX;
  const oldScrollY = window.scrollY;

  Menu_Menu.NewMenu(e.clientX + oldScrollX, e.clientY + oldScrollY, this);

  //keep scroll at old position after creating menu.
  window.scrollTo(oldScrollX, oldScrollY);
}

// CONCATENATED MODULE: ./dev/scripts/core/TabList/Init/initProperties.js


function initProperties(tabList) {
  tabList._itemCount = 0;
  tabList._settings = newDefaultSettings();
  tabList._minimizeButton = MinimizeButton_MinimizeButton.Create(tabList);
  tabList._itemContainer = ItemContainer_ItemContainer.Create(tabList);
  //for some reason using 'title' as variable name results in undefined value.
  tabList._title = Title_Title.Create(tabList);
  tabList._futureItem = FutureItem_FutureItem.Create(tabList);
}

// CONCATENATED MODULE: ./dev/scripts/core/TabList/Init/assembleComponentsAndAppend.js
function assembleComponentsAndAppend(tabList, appendTarget) {
  const itemContainer = tabList.getItemContainer();
  itemContainer.append(tabList.getFutureItem());

  tabList.append(
    tabList.getMinimizeButton(),
    tabList.getTitle(),
    itemContainer
  );
  appendTarget.appendChild(tabList);
}

// CONCATENATED MODULE: ./dev/scripts/core/TabList/Init/initPropertiesFromJSON.js


function initPropertiesFromJSON(tabList, tabListJSON) {
  tabList._itemCount = 0;
  tabList._settings = tabListJSON.settings;
  tabList._minimizeButton = MinimizeButton_MinimizeButton.Create(tabList);
  tabList._itemContainer = ItemContainer_ItemContainer.Create(tabList);
  //for some reason using 'title' as variable name results in undefined value.
  tabList._title = Title_Title.Create(tabList, tabListJSON.titleName);
  tabList._futureItem = FutureItem_FutureItem.Create(tabList);
}

// CONCATENATED MODULE: ./dev/scripts/core/TabList/Init/addItemsToTabListFromURLs.js
function addItemsToTabListFromURLs(tabList, urls) {
  for (const url of urls) {
    const item = tabList.newItem(url);
    tabList._itemContainer.insertBefore(item, tabList._futureItem);
  }
}

// CONCATENATED MODULE: ./dev/scripts/core/TabList/Init/getURLsFrom.js
function getURLsFrom(items) {
  const urls = [];

  for (const item of items) {
    const url = item.getURL();
    if (url) urls.push(url);
  }
  return urls;
}

// CONCATENATED MODULE: ./dev/scripts/core/TabList/Init.js














// CONCATENATED MODULE: ./dev/scripts/core/TabList.js




class TabList_TabList {
  static _createTabListElement() {
    return createElement("div", "list --tab-list-un-minimize-animation");
  }

  static Create(appendTarget) {
    ChangesDetector.detected();
    const tabList = TabList_TabList._createTabListElement();
    SavableObjects.add(tabList);

    Init_addFunctionalities_addFunctionalities(tabList);
    initProperties(tabList);
    assembleComponentsAndAppend(tabList, appendTarget);

    return tabList;
  }

  static FromJSON(appendTarget, tabListJSON) {
    const tabList = TabList_TabList._createTabListElement();
    SavableObjects.add(tabList);

    Init_addFunctionalities_addFunctionalities(tabList);
    initPropertiesFromJSON(tabList, tabListJSON);
    assembleComponentsAndAppend(tabList, appendTarget);
    addItemsToTabListFromURLs(tabList, tabListJSON.urls);

    return tabList;
  }
}

// CONCATENATED MODULE: ./dev/scripts/core/NewTabListButton/Init/addEventListeners.js



function NewTabListButton_Init_addEventListeners_addEventListeners(addListButton) {
  addListButton.addEventListener("click", createNewTabList);
}

function createNewTabList() {
  const tabList = TabList_TabList.Create(listContainer);
}

// CONCATENATED MODULE: ./dev/scripts/core/NewTabListButton/Init.js


// CONCATENATED MODULE: ./dev/scripts/core/NewTabListButton.js


class NewTabListButton_NewTabListButton {
  /**
   * create new "add new list" button.
   * @param {HTMLElement} appendTarget append to given target (default: null).
   */
  static Create(appendTarget = null) {
    const addListButton = document.createElement("button");

    if (appendTarget) appendTarget.appendChild(addListButton);

    addListButton.className = "btn btn--padding";
    addListButton.textContent = "Add new list";
    addListButton._listsElem = addListButton.previousElementSibling;

    NewTabListButton_Init_addEventListeners_addEventListeners(addListButton);

    return addListButton;
  }
}

// CONCATENATED MODULE: ./dev/scripts/core/Events/saveWhenCtrlS.js

/**
 *
 * @param {KeyboardEvent} e
 */
function saveWhenCtrlS() {
  document.body.addEventListener("keydown", (e) => {
    if (e.shiftKey || e.altKey) return;
    if (!e.ctrlKey || (e.key !== "s" && e.key !== "S")) return;
    e.preventDefault();
    LocalStorage_LocalStorage.save();
  });
}

// CONCATENATED MODULE: ./dev/scripts/core/Events/saveEveryTenSec.js


function saveEveryTenSec() {
  setTimeout(function repeat() {
    LocalStorage_LocalStorage.save();
    setTimeout(repeat, 10000);
  }, 10000);
}

// CONCATENATED MODULE: ./dev/scripts/core/Events.js



// CONCATENATED MODULE: ./dev/scripts/core/SaveButton/Init/addFunctionalities.js
/**
 *
 * @param {HTMLImageElement} saveButton
 */

function SaveButton_Init_addFunctionalities_addFunctionalities(saveButton) {
  /**
   * toggle gray scale for image.
   * @param {boolean} state turn on or off grayScale (true/false)
   */
  saveButton.toggleGrayScale = function (state) {
    // DEBUG
    saveButton.classList.remove("--gray-scale");
    console.log("CALLED", state);

    if (state) saveButton.classList.add("--gray-scale");
    else saveButton.classList.remove("--gray-scale");
  };
}

// CONCATENATED MODULE: ./dev/scripts/core/SaveButton/Init/addEventListeners.js


function SaveButton_Init_addEventListeners_addEventListeners(saveButton) {
  ChangesDetector.addEventListener(
    "onChange",
    saveButton.toggleGrayScale,
    saveButton,
    false
  );

  //when saved, remove gray scale.
  ChangesDetector.addEventListener(
    "onSave",
    saveButton.toggleGrayScale,
    saveButton,
    true
  );

  saveButton.addEventListener("click", () => {
    if (!ChangesDetector.haveChangesBeenMade()) return;

    LocalStorage_LocalStorage.save();
  });
}

// CONCATENATED MODULE: ./dev/scripts/core/SaveButton/Init.js



// CONCATENATED MODULE: ./dev/scripts/core/SaveButton.js


class SaveButton_SaveButton {
  /** make existing <img/> tag into a save button.
   *  @param {HTMLImageElement} elem
   */
  static FromExistingElem(elem) {
    elem.classList.add("--gray-scale");

    SaveButton_Init_addFunctionalities_addFunctionalities(elem);
    SaveButton_Init_addEventListeners_addEventListeners(elem);
    return elem;
  }
}

// CONCATENATED MODULE: ./dev/scripts/main.js





//BASIC FUNCTIONALITIES.
saveWhenCtrlS();
saveEveryTenSec();

//MAIN COMPONENTS.
const main_saveButton = SaveButton_SaveButton.FromExistingElem(
  document.querySelector(".save-btn")
);
const tabListSection = document.querySelector(".tab-list-section");
const listContainer = document.querySelector(".list-container");
const main_addListButton = NewTabListButton_NewTabListButton.Create(tabListSection);

//LOAD PREVIOUSLY SAVED OBJECTS.
LocalStorage_LocalStorage.load();


/***/ })
/******/ ]);