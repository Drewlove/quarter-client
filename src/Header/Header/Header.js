import React from "react";
import { useLocation } from "react-router-dom";
import MenuSignedIn from "../MenuAuthenticated/MenuAuthenticated";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { isLoading, isAuthenticated } = useAuth0();

  const renderAuthentication = () => {
    return isAuthenticated ? <MenuSignedIn /> : null;
  };

  return (
    <header className="header">
      <nav className="header__nav">
        {/* {pathname === "/" || !isAuthenticated ? null : <MenuSignedIn />} */}
        {/* {isLoading ? <h1>HI</h1> : null} */}
        {/* {!isAuthenticated ? null : <MenuSignedIn />} */}

        {isLoading ? null : renderAuthentication()}
      </nav>
    </header>
  );
}

export default Header;
