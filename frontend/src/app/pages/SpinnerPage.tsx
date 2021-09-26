import React, { FC } from "react";
import { Layout } from "../ui/Layout";
import {useParams} from "react-router-dom";
import {SpinnerComponent} from "../spinners/types";
import {activeSpinners} from "../spinners/activeSpinners";
import {Box, Heading, VStack} from "@chakra-ui/react";

const getSpinner = (slug: string, spinnerMap: Record<string, SpinnerComponent>): SpinnerComponent | undefined => spinnerMap[slug]

export const SpinnerPage: FC = () => {
  const {spinner} = useParams<{spinner: string}>()

  const Component = activeSpinners[spinner]

  if(Component === undefined) {
    return <Layout>
      <VStack spacing={10}>
        <Heading>Spinner not found</Heading>
      </VStack>
    </Layout>
  }

  return (
    <Layout>
    <VStack spacing={10}>
      <Heading>{Component.title}</Heading>
      <Box>
        <Component />
      </Box>
    </VStack>
  </Layout>
  )
};
