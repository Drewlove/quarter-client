import React from "react";
import { Link, useLocation } from "react-router-dom";
import MenuSignedOut from "./MenuSignedOut";
import MenuSignedIn from "./MenuSignedIn";

function Header() {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <nav className="header__nav">
        <Link className="header__title" to="/p&l">
          The Quarter
        </Link>
        {pathname === "/" ? <MenuSignedOut /> : <MenuSignedIn />}
      </nav>
    </header>
  );
}

export default Header;
