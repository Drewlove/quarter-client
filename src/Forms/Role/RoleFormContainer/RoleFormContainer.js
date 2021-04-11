import React from "react";
import { useParams } from "react-router-dom";
import RoleForm from "../RoleForm/RoleForm";
import FetchData from "../../../FetchData/FetchData";
import { useAuthId } from "../../../Authentication/useAuthId";

function RoleFormContainer() {
  const { rowId } = useParams();
  const userId = useAuthId();

  let endpointArr =
    rowId === "new"
      ? [`departments/${userId}`]
      : [`departments/${userId}`, `roles/${userId}/${rowId}`];

  return (
    <>
      <FetchData endpointArr={endpointArr} skeletonNumber={1}>
        <RoleForm rowId={rowId} />
      </FetchData>
    </>
  );
}

export default RoleFormContainer;
