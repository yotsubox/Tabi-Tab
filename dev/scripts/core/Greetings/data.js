export const _greetings = [
  getGreetingByTimeOfDay(new Date().getHours()),
  "Sup, fellow human.",
  "Hey.",
  "Howdy.",
  "What is up!",
  "Greetings.",
];
export const _extraLines = [
  "",
  "How have things been?",
  "How are things going?",
  "Chilling around much?",
  "Anything of interest today?",
  "By the way, how's life going?",
  "And the weather outside, How is it?",
  "Don't overworked yourself okay?",
  "Remember to drink water!",
  "Oh boy, looking pretty over there!",
  "Wow, I was just about to say something but then I forgot",
  "If you're feeling bad, just know that you'll be happy, maybe tomorrow, maybe longer, but you'll be happy, so... don't lose hope, okay!",
  "Good to know that you're alive, although I do not understand such concept, for I am a tab!",
  "Living the dream!!",
  "Tabi is my name, managing lists is my game",
  "Also nicely done! That thing you did today that I have no knowledge of!",
  "Gimme more RAM!!!",
  "'Happy Birthday!!' Is what I'll say on your birthday. Hah wouldn't it be nice if today was your birthday? To bad I'll never know",
  "The stuff on your other tabs are quite interesting I must say, especially those incognito ones",
  "I'm just here, executing instructions as usual.",
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

function getGreetingByTimeOfDay(hour) {
  if (hour >= 6 && hour < 10) return "Good morning!";
  if (hour >= 10 && hour < 12) return "Hey there!";
  if (hour >= 12 && hour < 16) return "Good afternoon!";
  if (hour >= 16 && hour < 22) return "Good evening!";
  if (hour >= 22 && hour < 24) return "Working hard ey? Remember to get some sleep!";
  if (hour >= 0 && hour < 6) return "I'm sleepy... (๑ᵕ⌓ᵕ̤)";
  //not gonna happen.
  return "Feels strange...";
}
