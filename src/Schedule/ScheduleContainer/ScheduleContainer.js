import React from "react";
import Schedule from "../Schedule/Schedule";
import FetchData from "../../FetchData/FetchData";
import { useAuth0 } from "@auth0/auth0-react";

function ScheduleContainer() {
  const { user } = useAuth0();
  let userId = user.sub.split("auth0|")[1];

  return (
    <>
      <FetchData endpointArr={[`shifts/${userId}`]} skeletonNumber={4}>
        <Schedule />
      </FetchData>
    </>
  );
}

export default ScheduleContainer;
