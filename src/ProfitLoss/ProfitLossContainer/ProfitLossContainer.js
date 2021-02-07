import React from "react";
import ProfitLoss from "../ProfitLoss/ProfitLoss";
import FetchListData from "../FetchListData/FetchListData";

function DepartmentsListContainer() {
  return (
    <main className="main">
      <FetchListData endpointStr="departments">
        <ProfitLoss />
      </FetchListData>
    </main>
  );
}

export default DepartmentsListContainer;
