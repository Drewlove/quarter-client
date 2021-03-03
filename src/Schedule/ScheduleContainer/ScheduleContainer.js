import React from "react";
import Schedule from "../Schedule/Schedule";
import FetchListData from "../../FetchListData/FetchListData";
import MenuAuthenticated from "../../Header/MenuAuthenticated/MenuAuthenticated";

function ScheduleContainer() {
  return (
    <>
      <MenuAuthenticated />
      <FetchListData endpointStr="shifts">
        <Schedule />
      </FetchListData>
    </>
  );
}

export default ScheduleContainer;
