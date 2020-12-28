import React, { useState, useEffect, useRef } from "react";
import HeaderLink from "../HeaderLink/HeaderLink";

function MenuSignedInNewItem() {
  const [menuNewItem, setDisplayMenuNewItem] = useState({
    display: false,
  });

  const useOutsideClick = (ref) => {
    useEffect(() => {
      console.log("use effect");
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDisplayMenuNewItem({ display: false });
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef);

  const toggleMenuDisplay = () => {
    const menuDisplayStatus = menuNewItem.display;
    setDisplayMenuNewItem({ display: !menuDisplayStatus });
  };

  const renderNewMenu = () => {
    return (
      <div className="header__menu_drop-down">
        <HeaderLink
          url="/form/line-item/new"
          toggleMenuDisplay={() => toggleMenuDisplay()}
          text="New Line Item"
          className="header__link_dropdown"
        />
        <HeaderLink
          url="/form/schedule/new"
          toggleMenuDisplay={() => toggleMenuDisplay()}
          text="New Shift"
          className="header__link_dropdown"
        />
        <HeaderLink
          url="/form/department/new"
          toggleMenuDisplay={() => toggleMenuDisplay()}
          text="New Department"
          className="header__link_dropdown"
        />
        <HeaderLink
          url="/form/role/new"
          toggleMenuDisplay={() => toggleMenuDisplay()}
          text="New Role"
          className="header__link_dropdown"
        />
      </div>
    );
  };

  return (
    <div
      className="header__button-container header__button-container_new-button"
      ref={wrapperRef}
    >
      <button
        className="header__menu-button header__menu-button_new"
        onClick={() => toggleMenuDisplay()}
      >
        +
      </button>
      {menuNewItem.display ? renderNewMenu() : null}
    </div>
  );
}

export default MenuSignedInNewItem;
