import React from "react";
import MenuAuthenticatedNavBar from "../MenuAuthenticatedNavBar/MenuAuthenticatedNavBar";
import MenuAuthenticatedHamburger from "../MenuAuthenticatedHamburger/MenuAuthenticatedHamburger";
import NewItemButton from "../NewItemButton/NewItemButton";
import { useAuth0 } from "@auth0/auth0-react";

function MenuAuthenticated() {
  const { isLoading, isAuthenticated } = useAuth0();

  return (
    <header className="header">
      <nav className="header__nav header__nav-authenticated">
        <NewItemButton />
        <MenuAuthenticatedNavBar />
        <MenuAuthenticatedHamburger />
      </nav>
    </header>
  );
}

export default MenuAuthenticated;
