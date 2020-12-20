import React from "react";
import { Link } from "react-router-dom";

function MenuSignedOut() {
  return (
    <div className="header__link-container header__link-container_signed-out">
      <Link className="header__link header__link_register" to="/register">
        Register
      </Link>
      <Link className="header__link header__link_sign-in" to="/sign-in">
        Sign In
      </Link>
    </div>
  );
}
export default MenuSignedOut;
