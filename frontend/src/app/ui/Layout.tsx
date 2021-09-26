import React, {FC} from "react"
import {NavMenu} from "./NavMenu";
import { Container } from "@chakra-ui/layout";

export const Layout: FC = ({children}) => (
  <Container>
    <NavMenu />
    <div>{children}</div>
  </Container>
)
