import {
  _greetings,
  _extraLines,
  _firstTimeGreeting,
  _longTimeGreetings,
  _longTimeExtraLines,
} from "./Greetings/data.js";
import { timestampPassedSinceLastOpened } from "../main.js";
const _time = new Date();

export class Greetings {
  static pick() {
    if (isFirstTime()) return _firstTimeGreeting;
    if (isVeryLate()) return _greetings[0];
    if (haveNotMetForAWhile()) return getRandomLongTimeLine();

    return getRandomLine();
  }
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
  const greeting = _greetings[iRandom(0, _greetings.length - 1)];
  const extra = _extraLines[iRandom(0, _extraLines.length - 1)];

  if (!extra) return greeting;
  return `${greeting} ${extra}`;
}

function getRandomLongTimeLine() {
  const greeting = _longTimeGreetings[iRandom(0, _longTimeGreetings.length - 1)];
  const extra = _longTimeExtraLines[iRandom(0, _longTimeExtraLines.length - 1)];

  return `${greeting} ${extra}`;
}
