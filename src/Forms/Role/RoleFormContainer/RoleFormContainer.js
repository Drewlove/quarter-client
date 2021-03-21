import React from "react";
import { useParams } from "react-router-dom";
import RoleForm from "../RoleForm/RoleForm";
import FetchData from "../../../FetchData/FetchData";
import { useAuth0 } from "@auth0/auth0-react";

function RoleFormContainer() {
  const { rowId } = useParams();
  const { user } = useAuth0();
  let userId = user.sub.split("auth0|")[1];

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
