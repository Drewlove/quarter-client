import React from "react";
import UserAuthenticationButton from "../../Authentication/UserAuthenticationButton/UserAuthenticationButton";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function MenuNotAuthenticated() {
  const { loginWithRedirect } = useAuth0();
  const history = useHistory();

  const signUp = () => {
    loginWithRedirect({
      screen_hint: "signup",
    });
  };

  return (
    <header className="header">
      <nav className="header__nav header__nav_not-authenticated">
        <UserAuthenticationButton
          optionalClass="header__button_authenticate"
          label="Demo"
          handleClick={() => history.push("/demo")}
        />
        <UserAuthenticationButton
          optionalClass="header__button_authenticate"
          label="Log In"
          handleClick={() => loginWithRedirect()}
        />
        <UserAuthenticationButton
          optionalClass="header__button_authenticate"
          label="Sign Up"
          handleClick={() => signUp()}
        />
      </nav>
    </header>
  );
}
export default MenuNotAuthenticated;
