import React from "react";
import RolesList from "../RolesList/RolesList";
import FetchListData from "../FetchListData/FetchListData";

function RolesListContainer() {
  return (
    <main className="main">
      <FetchListData endpointStr="roles">
        <RolesList />
      </FetchListData>
    </main>
  );
}

export default RolesListContainer;
