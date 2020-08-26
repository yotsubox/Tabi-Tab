export const _firstTimeGreeting =
  "Hello and nice to meet you! I'm Tabi Tab!" +
  " Although I don't have much to offer, I still hope that you would enjoy using me." +
  " Click the top right button for help on how to use me.";

export const _longTimeGreetings = [
  "Long time no see.",
  "Welcome back!",
  "How have you been?",
  "Look who's back!",
  "Hey!!",
  "Fellow human is back!!",
];

export const _longTimeExtraLines = [
  "Haven't seen you in a while.",
  "Life's been busy huh?",
  "It's been a long while.",
  "Man, I miss you.",
  "Been busy ey?",
  "Good to see you!",
];

export const _greetings = [
  getGreetingByTimeOfDay(new Date().getHours()),
  "Greetings.",
  "Sup, fellow human.",
  "Nice to see you.",
  "Hey.",
  "Howdy.",
  "What is up!",
  "Heya!",
  "Hiya!",
  "Yo!",
  "G'day mate.",
];

export const _extraLines = [
  "",
  "How have things been?",
  "How are things going?",
  "Chilling around much?",
  "Anything of interest today?",
  "By the way, how's life going?",
  "And the weather outside, How is it?",
  "Feels productive?",
  "Don't overworked yourself okay?",
  "Look behind you. Just kidding hehehe",
  "Quite a day already!",
  "Remember to drink water!",
  "Living the dream!!",
  "Oh boy, looking pretty over there!",
  "Glad to be of your service",
  "...I got nothing. Glad to see you!",
  "Wow, I was just about to say something but then I forgot",
  "If you're feeling bad, just know that you'll be happy, maybe tomorrow, maybe longer, " +
    "but you'll be happy, so... don't lose hope, okay!",
  "Good to know that you're alive, although I do not understand such concept, for I am a tab!",
  "Tabi is my name, managing lists is my game",
  "Also nicely done! That thing that you did today that I have no knowledge of!",
  "Gimme more RAM!!!",
  "Do not Alt F4 on me OKAY!!",
  "Progress progress!",
  "I like to overuse exclamation marks!!!!",
  "I'm still here, executing instructions as usual!",
  "Happy Birthday!... Is what I'll say on your birthday. Hah wouldn't it be nice if today was your birthday?",
  "The stuff on your other tabs are quite interesting I must say, especially those incognito ones",
  "The font is 'Pangolin', by the way",
  "list with millions of characters, I might get corrupted! But don't worry though that won't happen anytime soon",
  "Fun fact about me: I can only remember at most 5MB of information! So If you have a cosmically large " + ":>",
  "The programmer that created me decided that you shouldn't have to type in your name, gender and birthday in order " +
    "to use me. So sorry if I can't get to say your name and get to know you a little more",
  "Here's a great quote: 'We can forget happy things. We can probably forget sad things too. " +
    "People have the power to forget.' -Reggie from Mother 3",
  "You know, I will run out of lines to say at one point but that's okay, for your lists will always be fine. So, don't worry",
  ":)",
  ":D",
  "(¬､¬)",
  "(¬‿¬)",
  "(´﹃｀)",
  "(＾ω＾)",
  "(´・ω・｀)",
  "(─‿─)",
  "(ゝ◡╹)ノ♡",
  "(￣▽￣)ノ",
  "ヾ(＾∇＾)",
  "(´～`)",
  "I'm Ready! (＾＾)ｂ",
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
