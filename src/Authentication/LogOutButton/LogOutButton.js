import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogOutButton = (props) => {
  const { logout } = useAuth0();
  return (
    <button
      className={`button ${props.optionalClass}`}
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
  );
};

export default LogOutButton;
