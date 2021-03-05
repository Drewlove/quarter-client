import React from "react";
import Schedule from "../Schedule/Schedule";
import FetchListData from "../../FetchListData/FetchListData";

function ScheduleContainer() {
  return (
    <>
      <FetchListData endpointStr="shifts">
        <Schedule />
      </FetchListData>
    </>
  );
}

export default ScheduleContainer;
