import React from "react";
import HeaderLink from "../HeaderLink/HeaderLink";

function MenuSignedInMainRow() {
  return (
    <div className="header__link-container header__link-container_row">
      <HeaderLink
        url="/p&l"
        toggleMenuDisplay={() => null}
        text="Home"
        className="header__link_row"
      />
      <HeaderLink
        url="/department"
        toggleMenuDisplay={() => null}
        text="Departments"
        className="header__link_row"
      />
      <HeaderLink
        url="/role"
        toggleMenuDisplay={() => null}
        text="Roles"
        className="header__link_row"
      />
    </div>
  );
}

export default MenuSignedInMainRow;
