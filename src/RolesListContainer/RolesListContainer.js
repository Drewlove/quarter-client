import React from "react";
import RolesList from "../RolesList/RolesList";
import FetchListData from "../FetchListData/FetchListData";
import MenuAuthenticated from "../Header/MenuAuthenticated/MenuAuthenticated";

function RolesListContainer() {
  return (
    <>
      <MenuAuthenticated />
      <main className="main">
        <FetchListData endpointStr="roles">
          <RolesList />
        </FetchListData>
      </main>
    </>
  );
}

export default RolesListContainer;
