import React, { FC } from "react";
import { Layout } from "../ui/Layout";
import { Heading, Link, VStack } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import { appSpinners } from "../domain/spinners/appSpinners";

export const SpinnersIndexPage: FC = () => (
  <Layout>
    <VStack spacing={10}>
      <Heading>Spinners</Heading>
      {Object.entries(appSpinners).map(([slug, Spinner]) => (
        <RouteLink to={`/spinners/${slug}`}>
          <Link>{Spinner.title}</Link>
        </RouteLink>
      ))}
    </VStack>
  </Layout>
);
