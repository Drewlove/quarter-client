import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import LoadingIndicator from "../../LoadingIndicator/LoadingIndicator";

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => {
        return args.path !== "/app" ? <LoadingIndicator /> : null;
      },
    })}
    {...args}
  />
);

export default ProtectedRoute;
