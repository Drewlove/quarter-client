import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignupButton = (props) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className={`button ${props.optionalClass}`}
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      Sign Up
    </button>
  );
};

export default SignupButton;
