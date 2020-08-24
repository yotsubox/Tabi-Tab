import { _greetings, _extraLines } from "./Greetings/data.js";
const _time = new Date();

export class Greetings {
  static pick() {
    const hour = _time.getHours();

    if (hour >= 0 && hour < 6) return _greetings[0];

    const greeting = _greetings[iRandom(0, _greetings.length - 1)];
    const extra = _extraLines[iRandom(0, _extraLines.length - 1)];

    if (!extra) return greeting;
    return `${greeting} ${extra}`;
  }
}

function iRandom(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}
