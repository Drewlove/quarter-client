import React from "react";
import LogInButton from "../../Authentication/LogInButton/LogInButton";
import SignUpButton from "../../Authentication/SignUpButton/SignUpButton";

function MenuNotAuthenticated() {
  return (
    <header className="header">
      <nav className="header__nav header__nav_not-authenticated">
        <SignUpButton optionalClass="header__button_authenticate" />
        <LogInButton optionalClass="header__button_authenticate" />
      </nav>
    </header>
  );
}
export default MenuNotAuthenticated;
