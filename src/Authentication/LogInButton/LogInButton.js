// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// function LogInButton() {
//   const { loginWithRedirect } = useAuth0();

//   return (
//     <button
//       className="home-page__user-link_authentication"
//       onClick={() => loginWithRedirect()}
//     >
//       Log In
//     </button>
//   );
// }

// export default LogInButton;

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
