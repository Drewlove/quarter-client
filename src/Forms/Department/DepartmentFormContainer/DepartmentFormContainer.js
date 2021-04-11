import React from "react";
import { useParams } from "react-router-dom";
import DepartmentForm from "../DepartmentForm/DepartmentForm";
import FetchData from "../../../FetchData/FetchData";
import { useAuth0 } from "@auth0/auth0-react";

function DepartmentFormContainer() {
  const { rowId } = useParams();
  const { user } = useAuth0();
  let userId = user.sub.split("|")[1];

  let endpointArr = rowId === `new` ? [] : [`departments/${userId}/${rowId}`];

  return (
    <>
      <FetchData endpointArr={endpointArr} skeletonNumber={1}>
        <DepartmentForm rowId={rowId} />
      </FetchData>
    </>
  );
}

export default DepartmentFormContainer;
