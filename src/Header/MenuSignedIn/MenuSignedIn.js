import React from "react";
import MenuSignedInMainRow from "../MenuSignedInMainRow/MenuSignedInMainRow";
import MenuSignedInMainHamburger from "../MenuSignedInMainHamburger/MenuSignedInMainHamburger";
import MenuSignedInNewItem from "../MenuSignedInNewItem/MenuSignedInNewItem";

function MenuSignedIn() {
  return (
    <>
      <MenuSignedInNewItem />
      <MenuSignedInMainRow />
      <MenuSignedInMainHamburger />
    </>
  );
}

export default MenuSignedIn;
