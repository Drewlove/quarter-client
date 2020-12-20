import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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

  // const renderNewMenuButton = () => {
  //   return (
  //     <div
  //       className="header__link-container header__link-container_signed-in"
  //       ref={wrapperRef}
  //     >
  //       <button
  //         className="header__menu-button header__menu-button_right header__link"
  //         onClick={() => toggleMenuDisplay()}
  //       >
  //         +
  //       </button>
  //       {menuNewItem.display ? renderNewMenu() : null}
  //     </div>
  //   );
  // };

  const renderNewMenu = () => {
    return (
      <div className="header__menu_drop-down">
        <HeaderLink
          url="/form/line-item/new"
          toggleMenuDisplay={() => toggleMenuDisplay()}
          text="New Line Item"
        />
        <HeaderLink
          url="/form/schedule/new"
          toggleMenuDisplay={() => toggleMenuDisplay()}
          text="New Shift"
        />
        <HeaderLink
          url="/form/department/new"
          toggleMenuDisplay={() => toggleMenuDisplay()}
          text="New Department"
        />
        <HeaderLink
          url="/form/role/new"
          toggleMenuDisplay={() => toggleMenuDisplay()}
          text="New Role"
        />
      </div>
    );
  };

  return (
    <div
      className="header__button-container"
      // className="header__link-container header__link-container_signed-in"
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
