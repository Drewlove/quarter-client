import React from "react";
import { useParams } from "react-router-dom";
import LineItemForm from "../LineItemForm/LineItemForm";
import FetchData from "../../../FetchData/FetchData";
import { useAuthId } from "../../../Authentication/useAuthId";

function LineItemFormContainer() {
  const { rowId } = useParams();
  const userId = useAuthId();
  let endpointArr =
    rowId === `new`
      ? [`line_items/${userId}`]
      : [`line_items/${userId}`, `line_items/${userId}/${rowId}`];

  return (
    <>
      <FetchData endpointArr={endpointArr}>
        <LineItemForm rowId={rowId} />
      </FetchData>
    </>
  );
}

export default LineItemFormContainer;
