import React from "react";
import HeaderLink from "../HeaderLink/HeaderLink";

function MenuSignedOut() {
  return (
    <div className="header__link-container header__link-container_signed-out">
      <HeaderLink
        url="/register"
        text="Register"
        className="header__link_row"
        toggleMenuDisplay={() => null}
      />
      <HeaderLink
        url="/sign-in"
        text="Sign In"
        className="header__link_row"
        toggleMenuDisplay={() => null}
      />
    </div>
  );
}
export default MenuSignedOut;
