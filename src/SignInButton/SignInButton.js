import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function SignInButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="home-page__user-link_register"
      onClick={() => loginWithRedirect()}
    >
      Sign In
    </button>
  );
}

export default SignInButton;
