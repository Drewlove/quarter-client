import React from "react";
import RolesList from "../RolesList/RolesList";
import FetchData from "../FetchData/FetchData";
import { useAuth0 } from "@auth0/auth0-react";

function RolesListContainer() {
  const { user } = useAuth0();
  let userId = user.sub.split("auth0|")[1];

  return (
    <>
      <main className="main">
        <FetchData endpointArr={[`roles/${userId}`]} skeletonNumber={1}>
          <RolesList />
        </FetchData>
      </main>
    </>
  );
}

export default RolesListContainer;
