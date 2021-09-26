import {RandomColour} from "./RandomColour";
import {RandomWord} from "./RandomWord";
import {SpinnerComponent} from "./types"

export const activeSpinners: Record<string, SpinnerComponent> = {
  randomColor: RandomColour,
  randomWord: RandomWord
}