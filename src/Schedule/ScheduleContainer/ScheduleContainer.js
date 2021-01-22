import React from "react";
import Schedule from "../Schedule/Schedule";
import FetchListData from "../../FetchListData/FetchListData";

function ScheduleContainer() {
  return (
    <main className="main">
      <FetchListData endpointStr="shifts">
        <Schedule />
      </FetchListData>
    </main>
  );
}

export default ScheduleContainer;
