import React from "react";
import { useParams } from "react-router-dom";
import LineItemForm from "../LineItemForm/LineItemForm";
import FetchFormData from "../../FetchFormData/FetchFormData";

function RoleFormContainer() {
  const { id } = useParams();
  let endpointStr =
    id === `new` ? `line_items` : `line_items, line_items/${id}`;

  return (
    <>
      <FetchFormData endpointStr={endpointStr}>
        <LineItemForm id={id} />
      </FetchFormData>
    </>
  );
}

export default RoleFormContainer;
