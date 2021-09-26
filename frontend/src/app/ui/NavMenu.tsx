import React, { FC } from "react";
import { Link } from "react-router-dom";

export const NavMenu: FC = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
        <Link to="/spinners">Spinners</Link>
        <Link to="/spinners/random">Random Spinner</Link>
      </li>
    </ul>
  </nav>
);
