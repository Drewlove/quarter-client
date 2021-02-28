import React from "react";
import HeaderLink from "../HeaderLink/HeaderLink";
import { useAuth0 } from "@auth0/auth0-react";

function MenuSignedInMainRow() {
  const { logout } = useAuth0();
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
      <button
        className="header__link_row"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </button>
    </div>
  );
}

export default MenuSignedInMainRow;
