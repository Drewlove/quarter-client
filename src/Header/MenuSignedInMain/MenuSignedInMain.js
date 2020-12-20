import React, { useState, useEffect, useRef } from "react";
import HeaderLink from "../HeaderLink/HeaderLink";

function MenuSignedInMain() {
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

  const renderMenu = () => {
    return (
      <div className="header__menu_drop-down">
        <HeaderLink
          url="/p&l"
          toggleMenuDisplay={() => toggleMenuDisplay()}
          text="Home"
        />
        <HeaderLink
          url="/department"
          toggleMenuDisplay={() => toggleMenuDisplay()}
          text="Departments"
        />
        <HeaderLink
          url="/role"
          toggleMenuDisplay={() => toggleMenuDisplay()}
          text="Roles"
        />
      </div>
    );
  };

  return (
    <div className="header__button-container" ref={wrapperRef}>
      <button
        className={`header__menu-button header__menu-button_hamburger ${
          menu.display === true ? "open" : ""
        }`}
        onClick={() => toggleMenuDisplay()}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {menu.display ? renderMenu() : null}
    </div>
  );
}

export default MenuSignedInMain;
