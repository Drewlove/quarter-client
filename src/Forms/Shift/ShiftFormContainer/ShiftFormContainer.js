import React from "react";
import { useParams } from "react-router-dom";
import ShiftForm from "../ShiftForm/ShiftForm";
import FetchData from "../../../FetchData/FetchData";
import { useAuth0 } from "@auth0/auth0-react";

function ShiftFormContainer() {
  const { rowId } = useParams();
  const { user } = useAuth0();
  let userId = user.sub.split("auth0|")[1];

  let endpointArr =
    rowId === `new`
      ? [`departments/${userId}`, `roles/${userId}`]
      : [
          `departments/${userId}`,
          `roles/${userId}`,
          `shifts/${userId}/${rowId}`,
        ];

  return (
    <>
      <FetchData endpointArr={endpointArr}>
        <ShiftForm rowId={rowId} />
      </FetchData>
    </>
  );
}

export default ShiftFormContainer;
