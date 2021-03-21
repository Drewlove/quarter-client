import React from "react";
import { useParams } from "react-router-dom";
import LineItemForm from "../LineItemForm/LineItemForm";
import FetchData from "../../../FetchData/FetchData";
import { useAuth0 } from "@auth0/auth0-react";

function LineItemFormContainer() {
  const { rowId } = useParams();
  const { user } = useAuth0();
  let userId = user.sub.split("auth0|")[1];
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
