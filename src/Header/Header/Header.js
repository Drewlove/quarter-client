import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import MenuSignedOut from "../MenuSignedOut/MenuSignedOut";
import MenuSignedIn from "../MenuSignedIn/MenuSignedIn";

function Header() {
  const { pathname } = useLocation();

  const [menu, setMenuDisplay] = useState(false);

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setMenuDisplay(false);
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

  return (
    <header className="header">
      <nav className="header__nav">
        {pathname === "/" ? <MenuSignedOut /> : <MenuSignedIn />}
      </nav>
    </header>
  );
}

export default Header;
