const _time = new Date();
const _greetings = [
  getGreetingByTimeOfDay(_time.getHours()),
  "How are things going?",
  "Sup, fellow human.",
  "Hey.",
  "Howdy.",
  "What is up!",
];
const _extraLines = [
  "",
  "Remember to drink water!",
  "Oh boy, looking pretty over there!",
  "Don't overworked yourself okay?",
  "And the weather outside, How is it?",
  "Wow, I was just about to say something but then I forgot",
  "If you're feeling bad, just know that you'll be happy, maybe tomorrow, maybe longer, but you'll be happy, so... don't lose hope, okay!",
  "Chilling around much?",
  "Good to know that you're alive, although I do not understand such concept, for I am a tab!",
  "Living the dream!!",
  "Tabi is my name, managing lists is my game",
  "Also nicely done! That thing you did today that I have no knowledge of!",
  "Anything of interest today?",
  "Gimme more RAM!!!",
  "'Happy Birthday!!' Is what I'll say on your birthday. Hah wouldn't it be nice if today was your birthday? To bad I'll never know",
  "By the way, about that, nice...",
  "The stuff on your other tabs are quite interesting I must say, especially those incognito ones",
  ":>",
  ":)",
  ":D",
  "(¬､¬)",
  "(´﹃｀)",
  "(＾ω＾)",
  "(─‿─)",
  "(ゝ◡╹)ノ♡",
  "(´～`)",
];
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

function getGreetingByTimeOfDay(hour) {
  console.log(hour);
  if (hour >= 6 && hour < 10) return "Good morning!";
  if (hour >= 10 && hour < 12) return "Hey there!";
  if (hour >= 12 && hour < 16) return "Good afternoon!";
  if (hour >= 16 && hour < 22) return "Good evening!";
  if (hour >= 22 && hour < 24) return "Working hard ey? Remember to get some sleep!";
  if (hour >= 0 && hour < 6) return "I'm sleepy... (๑ᵕ⌓ᵕ̤)";
  //not gonna happen.
  return "Feels strange...";
}
