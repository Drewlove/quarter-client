import React from "react";
import SignInButton from "../SignInButton/SignInButton";

function NotSignedIn() {
  return (
    <>
      <p>You must be signed in to view this page</p>
      <SignInButton />
    </>
  );
}

export default NotSignedIn;
