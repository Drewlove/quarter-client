import React from "react";
import HeaderLink from "../HeaderLink/HeaderLink";
import LogOutButton from "../../Authentication/LogOutButton/LogOutButton";

function MenuAuthenticatedNavBar() {
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
        <LogOutButton />
      </div>
    </>
  );
}

export default MenuAuthenticatedNavBar;
