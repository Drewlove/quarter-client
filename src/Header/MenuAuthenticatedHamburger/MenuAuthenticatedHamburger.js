import React, { useState, useEffect, useRef } from "react";
import HeaderLink from "../HeaderLink/HeaderLink";
import { useAuth0 } from "@auth0/auth0-react";

function MenuAuthenticatedHamburger() {
  const [menu, setMenuDisplay] = useState({
    display: false,
  });

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setMenuDisplay({ display: false });
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const toggleMenuDisplay = () => {
    const menuDisplayStatus = menu.display;
    setMenuDisplay({ display: !menuDisplayStatus });
  };

  const { logout } = useAuth0();

  const renderMenu = () => {
    return (
      <div className="header__menu_drop-down">
        <div className="header__menu_drop-down-content">
          <HeaderLink
            url="/app/pnl"
            toggleMenuDisplay={() => toggleMenuDisplay()}
            text="P&L"
            className="header__item_dropdown"
          />
          <HeaderLink
            url="/app/departments"
            toggleMenuDisplay={() => toggleMenuDisplay()}
            text="Departments"
            className="header__item_dropdown"
          />
          <HeaderLink
            url="/app/roles"
            toggleMenuDisplay={() => toggleMenuDisplay()}
            text="Roles"
            className="header__item_dropdown"
          />
          <HeaderLink
            url="/app/schedule"
            toggleMenuDisplay={() => toggleMenuDisplay()}
            text="Schedule"
            className="header__item_dropdown"
          />
          <div className="header__logout-button-container">
            <button
              className="header__logout-button"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className="header__button-container header__button-container_hamburger"
        ref={wrapperRef}
      >
        <button
          className={`header__menu-button header__menu-button_hamburger ${
            menu.display === true ? "open" : ""
          }`}
          onClick={() => toggleMenuDisplay()}
        >
          Menu
          <span></span>
          <span></span>
          <span></span>
        </button>
        {menu.display ? renderMenu() : null}
      </div>
    </>
  );
}

export default MenuAuthenticatedHamburger;
