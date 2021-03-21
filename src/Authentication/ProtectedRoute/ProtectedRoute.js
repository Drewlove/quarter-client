import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import SkeletonLoader from "../../SkeletonLoader/SkeletonLoader";

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => {
        console.log(args.skeletonNumber);
        return <SkeletonLoader skeletonNumber={args.skeletonNumber} />;
      },
    })}
    {...args}
  />
);

export default ProtectedRoute;
