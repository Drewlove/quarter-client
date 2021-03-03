import React from "react";
import MenuAuthenticatedNavBar from "../MenuAuthenticatedNavBar/MenuAuthenticatedNavBar";
import MenuAuthenticatedHamburger from "../MenuAuthenticatedHamburger/MenuAuthenticatedHamburger";
import NewItemButton from "../NewItemButton/NewItemButton";

function MenuAuthenticated() {
  return (
    <>
      <NewItemButton />
      <MenuAuthenticatedNavBar />
      <MenuAuthenticatedHamburger />
    </>
  );
}

export default MenuAuthenticated;
