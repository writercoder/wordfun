import React, {FC} from 'react'
import {Box, Square, Text} from "@chakra-ui/react";
import {randomHex} from "../domain/sources/color";
import {SpinnerComponent} from "./types";

export const RandomColour: SpinnerComponent = () => {
  const colour = randomHex()
  return (
    <>
      <Square bg={colour} size="xl"></Square>
      <Text align="center">{colour}</Text>
    </>
  )
}

RandomColour.title = "Random colour"
