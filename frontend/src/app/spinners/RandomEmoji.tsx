import React from "react";
import { Spinner } from "../domain/spinners/types";
import { findEmoji, randomEmojiCode } from "../domain/sources/emoji";
import { Text, VStack } from "@chakra-ui/react";
import { Emoji } from "unicode-emoji";
import { SimpleSeed } from "../domain/spinners/seeds";

export const RandomEmoji: Spinner<SimpleSeed> = ({ seed }) => {
  const simpleSeed = seed as SimpleSeed;
  const emoji = findEmoji(simpleSeed.value) as Emoji;

  return (
    <VStack>
      <Text fontSize="180px">{emoji.emoji}</Text>
      <Text>{emoji.description}</Text>
    </VStack>
  );
};

RandomEmoji.title = "Random Emoji";
RandomEmoji.generateSeed = SimpleSeed.generator(randomEmojiCode);
