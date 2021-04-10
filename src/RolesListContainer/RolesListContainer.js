import React from "react";
import RolesList from "../RolesList/RolesList";
import FetchData from "../FetchData/FetchData";
import { useAuthId } from "../Authentication/useAuthId";

function RolesListContainer() {
  const userId = useAuthId();
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
