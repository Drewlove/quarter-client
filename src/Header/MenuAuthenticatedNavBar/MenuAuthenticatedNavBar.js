import React from "react";
import HeaderLink from "../HeaderLink/HeaderLink";
import UserAuthenticationButton from "../../Authentication/UserAuthenticationButton/UserAuthenticationButton";
import { useAuth0 } from "@auth0/auth0-react";

function MenuAuthenticatedNavBar() {
  const { logout } = useAuth0();
  return (
    <>
      <div className="header__items-container header__display-mobile-none">
        <div className="header__item-div">
          <HeaderLink
            url="/app/pnl"
            toggleMenuDisplay={() => null}
            text="P&L"
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
        <UserAuthenticationButton
          optionalClass="header__button_authenticate"
          label="Log Out"
          handleClick={() => logout()}
        />
      </div>
    </>
  );
}

export default MenuAuthenticatedNavBar;
