import { FC } from "react";

export interface Seed {
  toParam: () => string;
  format: () => string;
}

export interface SpinnerProps<T extends Seed> {
  seed: T;
}

export interface Spinner<T extends Seed> extends FC<SpinnerProps<T>> {
  title: string;
  generateSeed: (seedParam?: string) => T;
}
