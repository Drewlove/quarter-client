import React from "react";
import HeaderLink from "../HeaderLink/HeaderLink";
import { useAuth0 } from "@auth0/auth0-react";

function MenuSignedInMainRow() {
  const { logout } = useAuth0();
  return (
    <>
      <div className="header__items-container header__display-mobile-none">
        <div className="header__item-div">
          <HeaderLink url="/pnl" toggleMenuDisplay={() => null} text="Home" />
        </div>
        <div className="header__item-div">
          <HeaderLink
            url="/departments"
            toggleMenuDisplay={() => null}
            text="Departments"
          />
        </div>
        <div className="header__item-div">
          <HeaderLink
            url="/roles"
            toggleMenuDisplay={() => null}
            text="Roles"
          />
        </div>
        <div className="header__item-div">
          <HeaderLink
            url="/schedule"
            toggleMenuDisplay={() => null}
            text="Schedule"
          />
        </div>
      </div>
      <div className="header__item-div header__display-mobile-none">
        <button
          className="header__button_log-out"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </button>
      </div>
    </>
  );
}

export default MenuSignedInMainRow;
