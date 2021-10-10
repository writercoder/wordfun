import React from "react";
import { Spinner } from "../domain/spinners/types";
import { HStack } from "@chakra-ui/react";
import { RandomEmoji } from "./RandomEmoji";
import { randomEmojiCode } from "../domain/sources/emoji";
import { DualSeed, SimpleSeed } from "../domain/spinners/seeds";

export const TwoRandomEmoji: Spinner<DualSeed> = ({ seed }) => {
  const emojis = seed.value;

  return (
    <HStack spacing={10}>
      <RandomEmoji seed={new SimpleSeed(emojis[0])} />
      <RandomEmoji seed={new SimpleSeed(emojis[1])} />
    </HStack>
  );
};

TwoRandomEmoji.title = "Two Random Emoji";
TwoRandomEmoji.generateSeed = DualSeed.generator(randomEmojiCode);
