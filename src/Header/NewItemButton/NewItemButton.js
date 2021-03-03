import React, { useState, useEffect, useRef } from "react";
import HeaderLink from "../HeaderLink/HeaderLink";

function MenuSignedInNewItem() {
  const [menuNewItem, setDisplayMenuNewItem] = useState({
    display: false,
  });

  const useOutsideClick = (ref) => {
    useEffect(() => {
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
          url="/app/form/line-item/new"
          toggleMenuDisplay={() => toggleMenuDisplay()}
          text="New Line Item"
          className="header__item_dropdown"
        />
        <HeaderLink
          url="/app/form/schedule/new"
          toggleMenuDisplay={() => toggleMenuDisplay()}
          text="New Shift"
          className="header__item_dropdown"
        />
        <HeaderLink
          url="/app/form/department/new"
          toggleMenuDisplay={() => toggleMenuDisplay()}
          text="New Department"
          className="header__item_dropdown"
        />
        <HeaderLink
          url="/app/form/role/new"
          toggleMenuDisplay={() => toggleMenuDisplay()}
          text="New Role"
          className="header__item_dropdown"
        />
      </div>
    );
  };

  return (
    <div className="header__button-container" ref={wrapperRef}>
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
