import React from "react";

import Buttons from "./Buttons";
import Marquee from "./Marquee";

import "../styles/mainScreen.css";

export default function MainScreen() {

  return (
    <>
      <Buttons/>
      <Marquee/>
    </>
  );
}

// ANALAGOUS TO: <main>
// contains:  player stats, game stage (buttons), game round status, marquee