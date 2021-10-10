import { Seed } from "./types";

const utf8ToB64 = (str: string): string =>
  btoa(unescape(encodeURIComponent(str)));

const b64ToUtf8 = (str: string): string =>
  decodeURIComponent(escape(atob(str)));

type SimpleSeedGenerator = (seedParam?: string) => SimpleSeed;

export class SimpleSeed implements Seed {
  value: string;

  constructor(seed: string) {
    this.value = seed;
  }

  toParam() {
    return utf8ToB64(this.value);
  }

  format() {
    return this.value;
  }

  static generator(source: () => string): SimpleSeedGenerator {
    return (seedParam) =>
      seedParam === undefined
        ? new SimpleSeed(source())
        : new SimpleSeed(b64ToUtf8(seedParam));
  }
}

type DualSeedGenerator = (seedParam?: string) => DualSeed;
type DualSeedValue = [string, string];

export class ArraySeed<ValueType extends string[]> implements Seed {
  static separator = ",";
  value: ValueType;
  constructor(value: ValueType) {
    this.value = value;
  }

  toParam() {
    return utf8ToB64(this.value.join(ArraySeed.separator));
  }

  format() {
    return this.value.join(" ");
  }
}

export const decodeParam = <ValueType extends string[]>(
  seedParam: string,
  length: number
) => {
  const values = b64ToUtf8(seedParam).split(ArraySeed.separator);
  if (values.length !== length) {
    throw new Error("Incorrect number of seeds in parameter");
  } else {
    return values;
  }
};

export class DualSeed extends ArraySeed<DualSeedValue> {
  static generator(source: () => string): DualSeedGenerator {
    return (seedParam) =>
      seedParam === undefined
        ? new DualSeed([source(), source()])
        : new DualSeed(decodeParam(seedParam, 2) as DualSeedValue);
  }
}

type TripleSeedValue = [string, string, string];
type TripleSeedGenerator = (seedParam?: string) => TripleSeed;
export class TripleSeed extends ArraySeed<TripleSeedValue> implements Seed {
  static generator(source: () => string): TripleSeedGenerator {
    return (seedParam) =>
      seedParam === undefined
        ? new TripleSeed([source(), source(), source()])
        : new TripleSeed(decodeParam(seedParam, 3) as TripleSeedValue);
  }
}
