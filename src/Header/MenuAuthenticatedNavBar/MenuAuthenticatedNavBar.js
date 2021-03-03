import React from "react";
import HeaderLink from "../HeaderLink/HeaderLink";
import LogOutButton from "../../Authentication/LogOutButton/LogOutButton";

function MenuAuthenticatedNavBar() {
  return (
    <>
      <div className="header__items-container header__display-mobile-none">
        <div className="header__item-div">
          <HeaderLink
            url="/app/pnl"
            toggleMenuDisplay={() => null}
            text="Home"
          />
        </div>
        <div className="header__item-div">
          <HeaderLink
            url="/app/departments"
            toggleMenuDisplay={() => null}
            text="Departments"
          />
        </div>
        <div className="header__item-div">
          <HeaderLink
            url="/app/roles"
            toggleMenuDisplay={() => null}
            text="Roles"
          />
        </div>
        <div className="header__item-div">
          <HeaderLink
            url="/app/schedule"
            toggleMenuDisplay={() => null}
            text="Schedule"
          />
        </div>
      </div>
      <div className="header__item_button-container header__display-mobile-none">
        <LogOutButton optionalClass="header__button_authenticate" />
      </div>
    </>
  );
}

export default MenuAuthenticatedNavBar;
