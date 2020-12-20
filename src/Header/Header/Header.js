import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuSignedOut from "../MenuSignedOut/MenuSignedOut";
import MenuSignedIn from "../MenuSignedIn/MenuSignedIn";
import HeaderLink from "../HeaderLink/HeaderLink";

function Header() {
  const { pathname } = useLocation();

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

  const renderMenuButton = () => {
    return (
      <section className="header__link-container" ref={wrapperRef}>
        <button
          className="header__new-menu-button header__link"
          onClick={() => toggleMenuDisplay()}
        >
          MENU
        </button>
        {menu.display ? renderMenu() : null}
      </section>
    );
  };

  const renderMenu = () => {
    return (
      <div className="header__new-menu">
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
    <header className="header">
      <nav className="header__nav">
        {pathname === "/" ? <MenuSignedOut /> : <MenuSignedIn />}
      </nav>
    </header>
  );
}

export default Header;

{
  /* <header className="header">
<nav className="header__nav">
  <h1>The Quarter</h1>
  <Link className="header__title" to="/p&l">
    The Quarter
  </Link>
  {pathname === "/" ? <MenuSignedOut /> : <MenuSignedIn />}
</nav>
</header> */
}
