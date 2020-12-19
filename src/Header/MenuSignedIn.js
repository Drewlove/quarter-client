import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import HeaderLink from "./HeaderLink";

function MenuSignedOut() {
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

  const renderNewMenuButton = () => {
    return (
      <section className="header__link-container_new-menu">
        <button
          className="header__new-menu-button header__link"
          onClick={() => toggleMenuDisplay()}
        >
          +
        </button>
        {menu.display ? renderNewMenu() : null}
      </section>
    );
  };

  const renderNewMenu = () => {
    return (
      <div className="header__new-menu">
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
    <section className="header__link-container" ref={wrapperRef}>
      <Link className="header__link" to="/department">
        Departments
      </Link>
      <Link className="header__link" to="/role">
        Roles
      </Link>
      {renderNewMenuButton()}
    </section>
  );
}

export default MenuSignedOut;
