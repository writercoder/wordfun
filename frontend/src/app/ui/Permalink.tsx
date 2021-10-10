import React, { FC } from "react";
import { Link } from "react-router-dom";
import { AppSpinners } from "../domain/spinners/appSpinners";
import { Seed, Spinner } from "../domain/spinners/types";
import { DualSeed, SimpleSeed, TripleSeed } from "../domain/spinners/seeds";

export interface PermalinkProps {
  slug: keyof AppSpinners;
  seed: Seed;
  Spinner: Spinner<SimpleSeed | DualSeed | TripleSeed>;
}

export const Permalink: FC<PermalinkProps> = ({ slug, seed, Spinner }) => (
  <Link to={`/spinners/${slug}/${seed.toParam()}`}>
    Permalink: {Spinner.title} - {seed.format()}
  </Link>
);
