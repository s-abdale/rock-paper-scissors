import React from "react";

import MainScreen from "./MainScreen";
import Header from "./Header";

import "../styles/computerScreen.css";
// import MainScreen from "./MainScreen";

export default function ComputerScreen() {

  return (
    <div className="computer-screen">
      <Header/>
      <MainScreen/>
    </div>
  );
}

// ANALAGOUS TO: <div class="computer-screen">
// contains: header, main (player stats, game stage, game round status, marquee)