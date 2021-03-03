import React from "react";
import LogInButton from "../LogInButton/LogInButton";

function NotSignedIn() {
  return (
    <>
      <p>You must be signed in to view this page</p>
      <LogInButton />
    </>
  );
}

export default NotSignedIn;
