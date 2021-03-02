import React, { useState, useEffect, useRef } from "react";
import HeaderLink from "../HeaderLink/HeaderLink";
import { useAuth0 } from "@auth0/auth0-react";

function MenuSignedInMainHamburger() {
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
      <div className="header__menu_hamburger-drop-down">
        <HeaderLink
          url="/pnl"
          toggleMenuDisplay={() => toggleMenuDisplay()}
          text="Home"
          className="header__item_dropdown"
        />
        <HeaderLink
          url="/departments"
          toggleMenuDisplay={() => toggleMenuDisplay()}
          text="Departments"
          className="header__item_dropdown"
        />
        <HeaderLink
          url="/roles"
          toggleMenuDisplay={() => toggleMenuDisplay()}
          text="Roles"
          className="header__item_dropdown"
        />
        <HeaderLink
          url="/schedule"
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

export default MenuSignedInMainHamburger;

// import React, { useState, useEffect, useRef } from "react";
// import HeaderLink from "../HeaderLink/HeaderLink";

// function MenuSignedInMainHamburger() {
//   const [menuNewItem, setDisplayMenuNewItem] = useState({
//     display: false,
//   });

//   const useOutsideClick = (ref) => {
//     useEffect(() => {
//       function handleClickOutside(event) {
//         if (ref.current && !ref.current.contains(event.target)) {
//           setDisplayMenuNewItem({ display: false });
//         }
//       }
//       document.addEventListener("mousedown", handleClickOutside);
//       return () => {
//         document.removeEventListener("mousedown", handleClickOutside);
//       };
//     }, [ref]);
//   };

//   const wrapperRef = useRef(null);
//   useOutsideClick(wrapperRef);

//   const toggleMenuDisplay = () => {
//     const menuDisplayStatus = menuNewItem.display;
//     setDisplayMenuNewItem({ display: !menuDisplayStatus });
//   };

//   const renderNewMenu = () => {
//     return (
//       <div className="header__menu_drop-down">
//         <HeaderLink
//           url="/form/line-item/new"
//           toggleMenuDisplay={() => toggleMenuDisplay()}
//           text="New Line Item"
//           className="header__item_dropdown"
//         />
//         <HeaderLink
//           url="/form/schedule/new"
//           toggleMenuDisplay={() => toggleMenuDisplay()}
//           text="New Shift"
//           className="header__item_dropdown"
//         />
//         <HeaderLink
//           url="/form/department/new"
//           toggleMenuDisplay={() => toggleMenuDisplay()}
//           text="New Department"
//           className="header__item_dropdown"
//         />
//         <HeaderLink
//           url="/form/role/new"
//           toggleMenuDisplay={() => toggleMenuDisplay()}
//           text="New Role"
//           className="header__item_dropdown"
//         />
//       </div>
//     );
//   };

//   return (
//     <div className="header__button-container" ref={wrapperRef}>
//       <button
//         className="header__menu-button header__menu-button_new"
//         onClick={() => toggleMenuDisplay()}
//       >
//         +
//       </button>
//       {menuNewItem.display ? renderNewMenu() : null}
//     </div>
//   );
// }

// export default MenuSignedInMainHamburger;
