import React from "react";
import { useParams } from "react-router-dom";
import ShiftForm from "../ShiftForm/ShiftForm";
import FetchFormData from "../../FetchFormData/FetchFormData";

function ShiftFormContainer() {
  const { id } = useParams();
  let endpointStr = id === `new` ? `` : `shifts/${id}, departments, roles`;

  return (
    <>
      <FetchFormData endpointStr={endpointStr}>
        <ShiftForm id={id} />
      </FetchFormData>
    </>
  );
}

export default ShiftFormContainer;
