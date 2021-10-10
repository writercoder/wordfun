import React from "react";
import { Square, Text } from "@chakra-ui/react";
import { randomHex } from "../domain/sources/color";
import { Spinner } from "../domain/spinners/types";
import { SimpleSeed } from "../domain/spinners/seeds";

export const RandomColour: Spinner<SimpleSeed> = ({ seed }) => {
  const colour = seed.value;
  return (
    <>
      <Square bg={colour} size="xl"></Square>
      <Text align="center">{colour}</Text>
    </>
  );
};

RandomColour.title = "Random colour";
RandomColour.generateSeed = SimpleSeed.generator(randomHex);
