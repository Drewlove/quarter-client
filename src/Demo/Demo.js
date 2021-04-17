import React from "react";
import UserAuthenticationButton from "../Authentication/UserAuthenticationButton/UserAuthenticationButton";
import { useAuth0 } from "@auth0/auth0-react";

function Demo() {
  const { loginWithRedirect } = useAuth0();
  return (
    <main>
      <h2 className="demo__header">Weclome to the demo!</h2>
      <p className="demo__text">
        We've plugged some info into the demo account so you can see how the app
        works.
      </p>
      <div className="demo__container">
        <p className="demo__text">
          Log in with the following credentials to view the demo:
          <div className="demo__credentials-container">
            <p className="demo__credentials-text">
              <b>username:</b> quarterapptest@gmail.com
            </p>
            <p className="demo__credentials-text">
              <b>password:</b> Quarter!0
            </p>
          </div>
        </p>
        <UserAuthenticationButton
          optionalClass="home-page__user-link_authentication"
          label="Log In"
          handleClick={() => loginWithRedirect()}
        />
      </div>
    </main>
  );
}

export default Demo;
