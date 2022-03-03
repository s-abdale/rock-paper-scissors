import React from "react";

import "../styles/header.css";

export default function Header() {

  return (
    <header>
      <div class="header-buttons">
        <div class="header-buttons-close"> </div>
        <div class="header-buttons-minimize"> </div>
        <span class="header-buttons-maximize-refresh">refresh</span>
      </div>
      <h1 class="header-title">
        Rock, paper, scissors
      </h1>
    </header>
  );
}
