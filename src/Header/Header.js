import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();

  const [menu, setMenuDisplay] = useState({
    display: false,
  });

  const toggleMenuDisplay = () => {
    const menuDisplayStatus = menu.display;
    setMenuDisplay({ display: !menuDisplayStatus });
  };

  const renderRegisterSignIn = () => {
    return (
      <>
        <Link className="header__link header__link_register" href="/register">
          Register
        </Link>
        <Link className="header__link header__link_sign-in" href="/sign-in">
          Sign In
        </Link>
      </>
    );
  };

  const renderNewMenuButton = () => {
    return (
      <section className="header__link-container header__link-container_new-menu">
        <button
          // header__new-menu-button
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
        <Link
          to="/form/new"
          className="header__new-menu-link"
          onClick={() => toggleMenuDisplay()}
        >
          New Line Item
        </Link>
        <Link
          to="/schedule/form"
          className="header__new-menu-link"
          onClick={() => toggleMenuDisplay()}
        >
          New Shift
        </Link>
      </div>
    );
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__title">The Quarter</div>
        <section className="header__link-container">
          {pathname === "/" ? renderRegisterSignIn() : null}
        </section>
        {pathname === "/" ? null : renderNewMenuButton()}
      </nav>
    </header>
  );
}

export default Header;

// <header className="header">
// <nav className="header__nav">
//   <section className="header__section header__section_banner">
//     <div className="header__title">The Quarter</div>
//     <div className="header__link-container">
//       {pathname === "/" ? renderRegisterSignIn() : renderNewButton()}
//     </div>
//   </section>
//   {/* {pathname === "/" ? null : renderNewItemMenu()} */}
// </nav>
// </header>
