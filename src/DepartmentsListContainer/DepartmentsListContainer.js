import React from "react";
import DepartmentsList from "../DepartmentsList/DepartmentsList";
import FetchData from "../FetchData/FetchData";
import { useAuthId } from "../Authentication/useAuthId";

function DepartmentsListContainer() {
  const userId = useAuthId();
  return (
    <>
      <main className="main">
        <FetchData endpointArr={[`departments/${userId}`]} skeletonNumber={1}>
          <DepartmentsList />
        </FetchData>
      </main>
    </>
  );
}

export default DepartmentsListContainer;
