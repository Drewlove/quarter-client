import React from "react";
import MenuAuthenticatedNavBar from "../MenuAuthenticatedNavBar/MenuAuthenticatedNavBar";
import MenuAuthenticatedHamburger from "../MenuAuthenticatedHamburger/MenuAuthenticatedHamburger";
import NewItemButton from "../NewItemButton/NewItemButton";

function MenuAuthenticated() {
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
