import React from "react";
import { Spinner } from "../domain/spinners/types";
import { SimpleSeed } from "../domain/spinners/seeds";
import { sample } from "lodash";

export const RandomWord: Spinner<SimpleSeed> = ({ seed }) => {
  //
  const word = seed.value;

  // useAsyncEffect(
  //   async (isMounted) => {
  //     if (!loadData) {
  //       return;
  //     }
  //     setLoadData(false);
  //     const response = await fetch(process.env.REACT_APP_API_URL as string);
  //     const data = await response.json();
  //
  //     if (isMounted()) {
  //       setWord(data.word);
  //     }
  //   },
  //   [loadData]
  // );

  return (
    <>
      <div>{word}</div>
    </>
  );
};

RandomWord.title = "Random word";
RandomWord.generateSeed = SimpleSeed.generator(
  () => sample(["Drink", "Arse", "Feck", "Girls"]) as string
);
