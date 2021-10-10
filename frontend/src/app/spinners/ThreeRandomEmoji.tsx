import React from "react";
import { Spinner } from "../domain/spinners/types";
import { HStack } from "@chakra-ui/react";
import { RandomEmoji } from "./RandomEmoji";
import { randomEmojiCode } from "../domain/sources/emoji";
import { SimpleSeed, TripleSeed } from "../domain/spinners/seeds";

export const ThreeRandomEmoji: Spinner<TripleSeed> = ({ seed }) => {
  const emojis = seed.value;
  return (
    <HStack spacing={10}>
      <RandomEmoji seed={new SimpleSeed(emojis[0])} />
      <RandomEmoji seed={new SimpleSeed(emojis[1])} />
      <RandomEmoji seed={new SimpleSeed(emojis[2])} />
    </HStack>
  );
};

ThreeRandomEmoji.title = "Three Random Emoji";
ThreeRandomEmoji.generateSeed = TripleSeed.generator(randomEmojiCode);
