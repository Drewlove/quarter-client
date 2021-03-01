import React from "react";
import HeaderLink from "../HeaderLink/HeaderLink";

function MenuSignedOut() {
  return (
    <div className="header__item-container header__item-container_signed-out">
      <HeaderLink
        url="/register"
        text="Register"
        className="header__item_row"
        toggleMenuDisplay={() => null}
      />
      <HeaderLink
        url="/sign-in"
        text="Sign In"
        className="header__item_row"
        toggleMenuDisplay={() => null}
      />
    </div>
  );
}
export default MenuSignedOut;
