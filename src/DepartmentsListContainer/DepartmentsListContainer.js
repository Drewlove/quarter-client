import React from "react";
import DepartmentsList from "../DepartmentsList/DepartmentsList";
import FetchData from "../FetchData/FetchData";
import { useAuth0 } from "@auth0/auth0-react";

function DepartmentsListContainer() {
  const { user } = useAuth0();
  let userId = user.sub.split("auth0|")[1];

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
