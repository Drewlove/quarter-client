import React from "react";
import { Link } from "react-router-dom";

function MenuSignedOut() {
  return (
    <section className="header__link-container">
      <Link className="header__link header__link_register" href="/register">
        Register
      </Link>
      <Link className="header__link header__link_sign-in" href="/sign-in">
        Sign In
      </Link>
    </section>
  );
}
export default MenuSignedOut;
