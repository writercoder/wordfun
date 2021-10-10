import React, { FC } from "react";
import { Layout } from "../ui/Layout";
import { useParams } from "react-router-dom";
import { AppSpinners, appSpinners } from "../domain/spinners/appSpinners";
import { Box, Heading, VStack } from "@chakra-ui/react";
import { Permalink } from "../ui/Permalink";
import { Spinner } from "../domain/spinners/types";
import { DualSeed, SimpleSeed, TripleSeed } from "../domain/spinners/seeds";

export const SpinnerPage: FC = () => {
  const { spinner: slug, seed: seedParam } =
    useParams<{ spinner: keyof AppSpinners; seed?: string }>();
  const Component = appSpinners[slug] as Spinner<
    SimpleSeed | DualSeed | TripleSeed
  >;
  if (Component === undefined) {
    return (
      <Layout>
        <VStack spacing={10}>
          <Heading>Spinner not found</Heading>
        </VStack>
      </Layout>
    );
  }
  const seed = Component.generateSeed(seedParam);

  return (
    <Layout>
      <VStack spacing={10}>
        <Heading>{Component.title}</Heading>
        <Box>
          <Component seed={seed} />
          {seed && <Permalink Spinner={Component} seed={seed} slug={slug} />}
        </Box>
      </VStack>
    </Layout>
  );
};
