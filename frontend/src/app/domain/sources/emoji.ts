import * as unicodeEmoji from "unicode-emoji";

const emojis = unicodeEmoji.getEmojis();

export const randomEmoji = () =>
  emojis[Math.floor(Math.random() * emojis.length)];

export const randomEmojiCode = () => randomEmoji().emoji;

export const findEmoji = (code: string) => emojis.find((e) => e.emoji === code);
