import React from "react";
import { useLocation } from "react-router-dom";
import MenuSignedIn from "../MenuSignedIn/MenuSignedIn";

function Header() {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <nav className="header__nav">
        {pathname === "/" ? null : <MenuSignedIn />}
      </nav>
    </header>
  );
}

export default Header;
