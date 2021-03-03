import React from "react";
import DepartmentsList from "../DepartmentsList/DepartmentsList";
import FetchListData from "../FetchListData/FetchListData";
import MenuAuthenticated from "../Header/MenuAuthenticated/MenuAuthenticated";

function DepartmentsListContainer() {
  return (
    <>
      <MenuAuthenticated />
      <main className="main">
        <FetchListData endpointStr="departments">
          <DepartmentsList />
        </FetchListData>
      </main>
    </>
  );
}

export default DepartmentsListContainer;
