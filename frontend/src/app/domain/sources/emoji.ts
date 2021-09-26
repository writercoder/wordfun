import * as unicodeEmoji from 'unicode-emoji';

const emojis = unicodeEmoji.getEmojis()

export const randomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)]
