import { RandomColour } from "../../spinners/RandomColour";
import { RandomWord } from "../../spinners/RandomWord";
import { RandomEmoji } from "../../spinners/RandomEmoji";
import { TwoRandomEmoji } from "../../spinners/TwoRandomEmoji";
import { ThreeRandomEmoji } from "../../spinners/ThreeRandomEmoji";

export const appSpinners = {
  randomColor: RandomColour,
  randomEmoji: RandomEmoji,
  twoRandomEmoji: TwoRandomEmoji,
  threeRandomEmoji: ThreeRandomEmoji,
  randomWord: RandomWord,
};

export type AppSpinners = typeof appSpinners;
