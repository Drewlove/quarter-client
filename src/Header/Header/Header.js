import React from "react";
import { useLocation } from "react-router-dom";
import MenuSignedIn from "../MenuSignedIn/MenuSignedIn";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { pathname } = useLocation();
  const { isAuthenticated } = useAuth0();

  return (
    <header className="header">
      <nav className="header__nav">
        {pathname === "/" || !isAuthenticated ? null : <MenuSignedIn />}
      </nav>
    </header>
  );
}

export default Header;
