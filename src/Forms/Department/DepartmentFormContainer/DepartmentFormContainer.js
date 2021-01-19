import React from "react";
import { useParams } from "react-router-dom";
import DepartmentForm from "../DepartmentForm/DepartmentForm";
import FetchFormData from "../../FetchFormData/FetchFormData";

function DepartmentFormContainer() {
  const { id } = useParams();
  let endpointStr = id === `new` ? `` : `departments/${id}`;

  return (
    <>
      <FetchFormData endpointStr={endpointStr}>
        <DepartmentForm id={id} />
      </FetchFormData>
    </>
  );
}

export default DepartmentFormContainer;
