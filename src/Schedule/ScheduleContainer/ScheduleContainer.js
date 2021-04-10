import React from "react";
import Schedule from "../Schedule/Schedule";
import FetchData from "../../FetchData/FetchData";
import { useAuthId } from "../../Authentication/useAuthId";

function ScheduleContainer() {
  const userId = useAuthId();

  return (
    <>
      <FetchData endpointArr={[`shifts/${userId}`]} skeletonNumber={4}>
        <Schedule />
      </FetchData>
    </>
  );
}

export default ScheduleContainer;
