import * as React from "react";
import SignUp from "./SignUp";

interface Daily {
  path: string;
  number: string;
  component: React.ReactElement;
  style: string;
}

const dailies: Daily[] = [
  {
    path: "/SignUp",
    number: "001",
    component: <SignUp />,
    style: "Dark"
  }
];

export default dailies;
