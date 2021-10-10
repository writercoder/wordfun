import { appSpinners } from "./appSpinners";
import { sample } from "lodash";

export const randomSpinner = () => sample(appSpinners);
