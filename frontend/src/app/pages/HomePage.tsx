import React, { FC } from "react";
import { Layout } from "../ui/Layout";
import { Link as RouteLink } from "react-router-dom";
import {
  Button,
  Center,
  Heading,
  Link,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

export const HomePage: FC = () => (
  <Layout>
    <VStack spacing={10}>
      <Heading>Writing prompts</Heading>
      <SimpleGrid spacing={10} columns={2}>
        <Center>
          <RouteLink to="/spinners/random">
            <Link>
              <Button>Random prompt</Button>
            </Link>
          </RouteLink>
        </Center>
        <Center>
          <RouteLink to="/spinners">
            <Link>
              <Button>Browse prompts</Button>
            </Link>
          </RouteLink>
        </Center>
      </SimpleGrid>
    </VStack>
  </Layout>
);
