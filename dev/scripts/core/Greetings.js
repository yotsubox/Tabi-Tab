import {
  _greetings,
  _extraLines,
  _firstTimeGreeting,
  _longTimeGreetings,
  _longTimeExtraLines,
} from "./Greetings/data.js";
import { timestampPassedSinceLastOpened } from "../main.js";
import { LocalStorage } from "./SaveSystem/LocalStorage.js";

const _time = new Date();

export class Greetings {
  static pick() {
    updateLinesIndices();

    if (isFirstTime()) return _firstTimeGreeting;
    if (isVeryLate()) return _greetings[0];
    if (haveNotMetForAWhile()) return getRandomLongTimeLine();

    return getRandomLine();
  }
}

function updateLinesIndices() {
  //This is what happened when you don't have pointer alias.
  const saveData = LocalStorage.getSaveData();

  if (!saveData.greetings.greetingIndices.length)
    saveData.greetings.greetingIndices = createShuffledIndexArray(_greetings.length);

  if (!saveData.greetings.extraLineIndices.length)
    saveData.greetings.extraLineIndices = createShuffledIndexArray(_extraLines.length);

  if (!saveData.greetings.longTimeGreetingIndices.length)
    saveData.greetings.longTimeGreetingIndices = createShuffledIndexArray(_longTimeGreetings.length);

  if (!saveData.greetings.longTimeExtraLineIndices.length)
    saveData.greetings.longTimeExtraLineIndices = createShuffledIndexArray(_longTimeExtraLines.length);
}

function createShuffledIndexArray(size) {
  const arr = Array.from(Array(size).keys());
  return shuffle(arr);
}

function shuffle(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    const index = iRandom(0, i);
    //swapped
    [arr[index], arr[i]] = [arr[i], arr[index]];
  }
  return arr;
}

function iRandom(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function isFirstTime() {
  return timestampPassedSinceLastOpened === 0;
}

function isVeryLate() {
  const hour = _time.getHours();
  if (hour >= 0 && hour < 6) return true;
  else return false;
}

function haveNotMetForAWhile() {
  return timestampPassedSinceLastOpened >= 6.048e8;
}

function getRandomLine(_g) {
  const _greetingIndices = saveData.greetings.greetingIndices;
  const _extraLineIndices = saveData.greetings.extraLineIndices;

  const greeting = _greetings[_greetingIndices.pop()];
  const extra = _extraLines[_extraLineIndices.pop()];

  if (!extra) return greeting;
  return `${greeting} ${extra}`;
}

function getRandomLongTimeLine() {
  const _longTimeGreetingIndices = saveData.greetings.longTimeGreetingIndices;
  const _longTimeExtraLineIndices = saveData.greetings.longTimeExtraLineIndices;

  const greeting = _longTimeGreetings[_longTimeGreetingIndices.pop()];
  const extra = _longTimeExtraLines[_longTimeExtraLineIndices.pop()];

  return `${greeting} ${extra}`;
}
