import React from "react";
import { useParams } from "react-router-dom";
import RoleForm from "../RoleForm/RoleForm";
import FetchFormData from "../../FetchFormData/FetchFormData";

function RoleFormContainer() {
  const { id } = useParams();
  let endpointStr = id === `new` ? `departments` : `departments, roles/${id}`;

  return (
    <>
      <FetchFormData endpointStr={endpointStr}>
        <RoleForm id={id} />
      </FetchFormData>
    </>
  );
}

export default RoleFormContainer;
