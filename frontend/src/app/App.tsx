import React, {FC} from "react"
import {AppRouter} from "./AppRouter";
import { ChakraProvider } from "@chakra-ui/react"

export const App: FC = () => (
  <ChakraProvider>
    <AppRouter />
  </ChakraProvider>
)
