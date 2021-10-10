import React, { FC } from "react";
import { Layout } from "../ui/Layout";
import { Box, Heading, VStack } from "@chakra-ui/react";
import { randomSpinner } from "../domain/spinners/randomSpinner";
import { Spinner } from "../domain/spinners/types";
import { DualSeed, SimpleSeed, TripleSeed } from "../domain/spinners/seeds";

export const RandomSpinnerPage: FC = () => {
  const Component = randomSpinner() as Spinner<
    SimpleSeed | DualSeed | TripleSeed
  >;
  const seed = Component.generateSeed();

  return (
    <Layout>
      <VStack spacing={10}>
        <Heading>{Component.title}</Heading>
        <Box>
          <Component seed={seed} />
        </Box>
      </VStack>
    </Layout>
  );
};
