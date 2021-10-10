import React, { FC } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RandomSpinnerPage } from "./pages/RandomSpinnerPage";
import { SpinnerPage } from "./pages/SpinnerPage";
import { SpinnersIndexPage } from "./pages/SpinnersIndexPage";

export const AppRouter: FC = () => (
  <Router>
    <Switch>
      <Route path="/spinners/random">
        <RandomSpinnerPage />
      </Route>

      <Route path="/spinners/:spinner/:seed?">
        <SpinnerPage />
      </Route>

      <Route path="/spinners">
        <SpinnersIndexPage />
      </Route>

      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </Router>
);
