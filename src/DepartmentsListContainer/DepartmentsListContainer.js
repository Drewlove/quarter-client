import React from "react";
import DepartmentsList from "../DepartmentsList/DepartmentsList";
import FetchListData from "../FetchListData/FetchListData";

function DepartmentsListContainer() {
  return (
    <main className="main">
      <FetchListData endpointStr="departments">
        <DepartmentsList />
      </FetchListData>
    </main>
  );
}

export default DepartmentsListContainer;
