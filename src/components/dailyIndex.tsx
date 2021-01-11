import * as React from "react";
import SignUp from "./SignUp";
import Payment from "./Payment";

interface Daily {
  path: string;
  name: string;
  number: number;
  component: React.ReactElement;
  style: string;
  thumbnail?: string;
}

const dailies: Daily[] = [
  {
    path: "/SignUp",
    name: "Sign Up",
    number: 1,
    component: <SignUp />,
    style: "Dark",
    thumbnail: require("../assets/thumbnails/SignUp.png")
  },
  {
    path: "/Payment",
    name: "Payment",
    number: 2,
    component: <Payment />,
    style: "Dark",
    thumbnail: require("../assets/thumbnails/Payment.png")
  }
];

export default dailies;
