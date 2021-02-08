import React from "react";
import HeaderLink from "../HeaderLink/HeaderLink";

function MenuSignedInMainRow() {
  return (
    <div className="header__link-container header__link-container_row">
      <HeaderLink
        url="/pnl"
        toggleMenuDisplay={() => null}
        text="Home"
        className="header__link_row"
      />
      <HeaderLink
        url="/departments"
        toggleMenuDisplay={() => null}
        text="Departments"
        className="header__link_row"
      />
      <HeaderLink
        url="/roles"
        toggleMenuDisplay={() => null}
        text="Roles"
        className="header__link_row"
      />
      <HeaderLink
        url="/schedule"
        toggleMenuDisplay={() => null}
        text="Schedule"
        className="header__link_row"
      />
    </div>
  );
}

export default MenuSignedInMainRow;
